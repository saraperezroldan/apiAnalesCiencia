window.addEventListener('load',userForm = () => {

    let formUser = document.getElementById('form-newUser');
    formUser.innerHTML = ''
    formUser.innerHTML += `
            <h3>Registrarse</h3>
      		<pre>Nombre: <input id='newUsername' type="text" required maxlength="40"> </pre>
      		<pre>Contraseña: <input id='password' type ="password"></pre>
       		<pre>Correo eléctronico: <input id='email' type="email"></pre>
      		<pre>Fecha nacimiento: <input id='dateBirth' type="date"></pre>
      		
      		<input type="button" id="btn-newUser" class = "btn-Save" value="Crear cuenta" />
     `
    });

$("#btn-newUser").click(function(){
    authHeader= sessionStorage.getItem('Authorization')
    $.ajax({
        type: "POST",
        url: '/api/v1/users',
        headers: {"Authorization": authHeader},
        dataType: 'json',
        data: $("#form-newUser").serialize(),

        success: function (data) {
            alert("Usuario creado correctamente");
            $(window).attr('location','gestionUsers.html')},

        error: function (xhr) {
            let message = "";
            if (xhr.responseJSON && xhr.responseJSON.message) {
                message = xhr.responseJSON.message;
            }
            alert("Error:( \n" + message)
        }
    })
});



