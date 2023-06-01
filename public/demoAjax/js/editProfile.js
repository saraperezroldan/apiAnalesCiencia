
let etag = null;
let authHeader = sessionStorage.getItem('Authorization');
let id = showToken(authHeader).uid;

$(document).ready(function (){
    $.ajax({
        type: "GET",
        url: '/api/v1/users/'+ id,
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data)  {
            let editPerfil = document.querySelector('#editPerfil-User');
            let user = data.user;
            editPerfil.innerHTML = '';
            editPerfil.innerHTML += `
                <h3>👤 Mi Perfil</h3>                 
                <label for="idEdit">Id:</label>
                <input id='idEdit' type = "text" value="`+ user.id +`" disabled> <br><br>
                <label for="userName">Usuario: </label>
                <input type="text" id="userName" name="username" value="`+ user.username +`" required/><br><br>
                <label for="userEmail">Email: </label>
                <input type="email" id="userEmail" name="email" value="`+ user.email +`"/><br><br>
                <label for="birthDate">Fecha de cumpleaños: </label>
                <input type="date" id="birthDate" value=""/><br><br>
                <label for="rol">Permisos: </label>
                <input id="rol" type = "text" name ="role" value="`+user.role +`" >
                <hr/> 
                
                <input type="button" id="btn-Save-Profile" class = "btn-Elem" value="Actualizar datos"/>
                `
            document.querySelector('#btn-Save-Profile').addEventListener('click',updateProfile);
        },
        complete: function(xhr){
            etag = xhr.getResponseHeader("Etag")
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

function updateProfile(){
    let confirmar = confirm("Estas seguro de modificar tu perfil?");
    if (confirmar) {
        $.ajax({
            type: "PUT",
            url: '/api/v1/users/' + id,
            headers: {"Authorization": authHeader, "If-Match": etag},
            dataType: 'json',
            data: {
                name: $("#userName").val(),
                email: $("#userEmail").val(),
                fecha_nacimiento:$("#birthDate").val(),
            },
            success: function (data) {
                alert("Se han guardado los cambios correctamente 😊");
                window.history.back();
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

$("#btn-Exit-Profile").click(function(){
    let rol = showToken(authHeader).scopes;
    if(rol[1] === "writer"){
        $(window).attr('location','pagWriter.html')
    }
    else {
        $(window).attr('location','pagReader.html')
    }
});

function showToken(authHeader) {
    let token = authHeader.split(' ')[1];   // Elimina 'Bearer '
    return JSON.parse(atob(token.split('.')[1]));
}


