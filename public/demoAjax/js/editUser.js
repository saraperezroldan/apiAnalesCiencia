let etag = null;
$(document).ready(function (){
    let authHeader= sessionStorage.getItem('Authorization');
    let id = sessionStorage.getItem('idUser');
    $.ajax({
        type: "GET",
        url: '/api/v1/users/'+ id,
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data)  {
            let editUser = document.querySelector('#form-EditUser');
            let user = data.user;
            editUser.innerHTML = '';
            editUser.innerHTML += `
                <h3>Editar Usuario: `+ user.username +`</h3>
                <label for="idEdit">Id: </label>
                <input id='idEdit' type = "text" value="`+ user.id +`" disabled> <br><br>
                <label for="userName">Usuario: </label>
                <input type="text" id="userName" value="`+ user.username +`" required/><br><br>
                <label for="userEmail">Email: </label>
                <input type="email" id="userEmail" name="email" value="`+ user.email +`"/><br><br>
                <label for="birthDate">Fecha de cumpleaños: </label>
                <input type="date" id="birthDate"  value=""/><br><br>
                <label for="role">Permisos: </label>
            `;
            if(user.role === 'WRITER'){
                editUser.innerHTML += ` <select id ="role" name="role" >
                                            <option selected> Writer </option>
                                            <option > Reader </option>
                                        </select>`;
            }
            else{
                editUser.innerHTML += `  <select id="role" name="role" >
                                            <option> Writer </option>
                                            <option selected> Reader </option>
                                          </select>`;
            }
            if(user.role.length > 0){
                editUser.innerHTML += `<br><br>
                                       <label for= "activo" >Activo:</label>
                                        <input type="radio" id="activo" name="estado" value="activar" checked/> 
                                        <label for= "inactivo" >Inactivo:</label>
                                        <input type="radio" id="inactivo" name="estado" value="desactivar"/>                   
                `
            }
            else{
                editUser.innerHTML += `<br><br>
                                       <label for= "activo" >Activo:</label>
                                        <input type="radio" id="activo" name="estado" value="activar"/> 
                                        <label for= "inactivo" >Inactivo:</label>
                                        <input type="radio" id="inactivo" name="estado" value="desactivar" checked/> 
            `
            }
            editUser.innerHTML += `
                <br>
                <br>
                <hr>
                <input type="button" id="btn-upUser" class="btn-Elem" value="Guardar cambios"/>
            `
            document.querySelector('#btn-upUser').addEventListener('click',updateUser);
        },
        complete: function(xhr){
            etag =xhr.getResponseHeader("Etag")
        },
        error: function (xhr) {
            let message = "";
            if (xhr.responseJSON && xhr.responseJSON.message) {
                message = xhr.responseJSON.message;
            }
            alert("Error:( \n" + message)
        }
    })

})

function updateUser(){
    let authHeader= sessionStorage.getItem('Authorization');
    let id = sessionStorage.getItem('idUser');

    let msg = confirm("Estas seguro de Modificar");
    if(msg){
        $.ajax({
            type: "PUT",
            url: '/api/v1/users/'+ id,
            headers: {"Authorization": authHeader,"If-Match": etag},
            dataType: 'json',
            data:  $("#form-EditUser").serialize() ,
            success: function (data) {
                $(window).attr('location', 'gestionUsers.html')
            },
            error: function (xhr) {
                let message = "";
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    message = xhr.responseJSON.message;
                }
                alert("Error:( \n" + message)
            }
        })
    }
}