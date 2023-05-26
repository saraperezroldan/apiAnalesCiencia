let etag = null;
$(document).ready(function (){
    let authHeader= sessionStorage.getItem('Authorization');
    let id= sessionStorage.getItem('idUser');

    $.ajax({
        type: "GET",
        url: '/api/v1/users/'+id,
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data)  {
            let user = data.user;
            let editUser = document.querySelector('#formEdit-User');
            editUser.innerHTML = '';

            editUser.innerHTML += `
            <h3>Editar Usuario</h3>
            <label for="idEdit">Id: </label>
            <input id='idEdit' type = "text" value="`+ user.id +`" disabled> <br><br>
            <label for="username">Usuario: </label>
            <input type="text" id="username" name="username" value="`+ user.username +`" required/><br><br>
            <label for="email">Email: </label>
            <input type="email" id="useremail" name="email" value="`+ user.email +`"/><br><br>
            <label for="birthDate">Fecha de cumpleaños: </label>
            <input type="date" id="birthDate" name="email" value=""/><br><br>
            <label for="rol">Permisos: </label>
            `;

            if(user.role.toString() === 'WRITTER'){
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

            editUser.innerHTML += `
                <br><br> 
                <label for= "" >Estado:</label>
                <input type="radio" name="estado" value="activar"/>Activo
                <input type="radio" name="estado" value="desactivar" /> Inactivo
                <br>
                <br>
                <hr>      
                <input type="button" id="btn-upUser" class="btn-Elem" value="Guardar cambios"/>
                  
            `
            document.querySelector('#btn-upUser').addEventListener('click',updateUser);
        },
        complete: function(xhr){
            etag=xhr.getResponseHeader("Etag")

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
    let id= sessionStorage.getItem('idUser');

    let confirmar = confirm("Estas seguro de Modificar");
    if(confirmar){
        $.ajax({
            type: "PUT",
            url: '/api/v1/users/'+id,
            headers: {"Authorization": authHeader,"If-Match": etag},
            dataType: 'json',
            data:  $("#form-upUser").serialize() ,
            success: function (data) {
                $(window).attr('location', 'manejarUsuarios.html')
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