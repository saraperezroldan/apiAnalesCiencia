
$(document).ready(function (){
    authHeader= sessionStorage.getItem('Authorization');
    infoUser();
    showUsuarios(authHeader);
})

function infoUser(){
    authHeader = sessionStorage.getItem('Authorization');
    let idUser = document.querySelector('#idUser');
    let userName = showToken(authHeader).sub;
    let rol = showToken(authHeader).scopes;

    if(rol[1] === 'writer'){
        idUser.innerHTML = `
    <pre> Su identidicador es: ${userName} y tiene permisos de ${rol[1]}</pre>
    `
    } else {
        idUser.innerHTML = `
    <pre> Su identidicador es: ${userName} y tiene permisos de ${rol[0]}</pre>
    `
    }
}

function showUsuarios(authHeader) {
    $.ajax({
        type: "GET",
        url: '/api/v1/users',
        headers: {"Authorization": authHeader},
        // dataType: 'json',
        success: function (data) {
            let contenedor= document.querySelector('#tableUsers');
            contenedor.innerHTML = '';
            $.each(data.users, function(i, item) {
                console.log(data.users)
                contenedor.innerHTML+= `
                    <tr id='${item.user.id}'>
                        <td>${item.user.username}</td>
                        <td>${item.user.email}</td>
                        <td>${item.user.role}</td>
                        <td>${item.user.role}</td>

                        <td><button id="btnEdit" onclick="editarUser('${item.user.id}',)">Edit</button></td> 
                        <td><button id="btnDelete" onclick="eliminarUser('${item.user.id}')">Delete</button></td>      
                    </tr>       
            `
            });
        }
    })
}

function editarUser(id) {
    sessionStorage.setItem('idUser',id);
    $(window).attr('location', 'editUser.html')
}

function eliminarUser(id) {
    authHeader= sessionStorage.getItem('Authorization')
    let confirmar = confirm("Estas seguro de eliminar este usuario?");
    if(confirmar){
        $.ajax({
            type: "DELETE",
            url:'/api/v1/users/'+ id,
            headers: {"Authorization": authHeader},
            dataType: 'json',
            success: function () {
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

function showToken(authHeader) {
    let token = authHeader.split(' ')[1];   // Elimina 'Bearer '
    let myData = JSON.parse(atob(token.split('.')[1]));
    return  myData;
}

$("#btn-Exit").click(function(){
    $(window).attr('location','pagWriter.html')
})