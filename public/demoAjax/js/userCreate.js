window.addEventListener('load',userForm = () => {

    let formUser = document.getElementById('form-newUser');
    formUser.innerHTML = ''
    formUser.innerHTML += `
            <h3>Registrarse 📝</h3>
      		<pre>Nombre: <input id='newUsername' type="text" required> </pre>
      		<pre>Contraseña: <input id='password' type ="password" required></pre>
       		<pre>Correo eléctronico: <input id='email' type="email"></pre>
       		<pre>Rol: <input id='role' type="radio" checked >Reader:</pre>
      		<pre>Fecha nacimiento: <input id='birthday' type="date"></pre>
      		
      		<input type="button" id="btn-newUser" class = "btn-Save" value="Crear cuenta" />
     `
    document.querySelector('#btn-newUser').addEventListener('click',createUser);
    });

function createUser(){
    $.ajax({
        type: "POST",
        url: '/api/v1/users',
        dataType: 'json',
        data : {
            username: $("#newUsername").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            role: $("#role").val(),
            fecha_nacimiento: $("#birthday").val(),
        },
        success:function(data){
            alert("Cuenta creada con el usuario: " + data.username);
            $(window).attr('location','index.html')
        },
    });
};

    $("#btn-Exit").click(function(){
        sessionStorage.clear();
        $(window).attr('location','index.html');
    })



// $("#btn-newUser").click(function(){
//     authHeader= sessionStorage.getItem('Authorization')
//     $.ajax({
//         type: "POST",
//         url: '/api/v1/users',
//         headers: {"Authorization": authHeader},
//         dataType: 'json',
//         data: $("#form-newUser").serialize(),
//
//         success: function (data) {
//             alert("Usuario creado correctamente");
//             $(window).attr('location','gestionUsers.html')},
//
//         error: function (xhr) {
//             let message = "";
//             if (xhr.responseJSON && xhr.responseJSON.message) {
//                 message = xhr.responseJSON.message;
//             }
//             alert("Error:( \n" + message)
//         }
//     })




