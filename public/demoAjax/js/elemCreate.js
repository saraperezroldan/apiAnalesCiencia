
let typeElem = sessionStorage.getItem('tipoElem');
let authHeader = sessionStorage.getItem('Authorization');

$(document).ready(function (){
    let form = document.getElementById('formCreate');

    form.innerHTML = ''
    form.innerHTML += `
            <h3>Crear `+ typeElem +`</h3>
      		<pre>Nombre: <input id='nameElem' type="text" required maxlength="40"> </pre>
      		<pre>Fecha nacimiento/creación: <input id='dateBirth' type ="date"></pre>
       		<pre>Fecha fallecimiento/desuso: <input id='dateDeadth' type="date"></pre>
      		<pre>Imagen: <input id='urlImg' type="text"></pre>
      		<pre>Wikipedia: <input id='urlWiki' type = "text"></pre>
     `
    if (typeElem === 'Entity'){
        $.ajax({
            type: "GET",
            url: '/api/v1/persons',
            headers: {"Authorization": authHeader},
            dataType: 'json',
            success: function (data) {
                form.innerHTML += `<h5>Personajes<h5>`
                $.each(data.persons, function (i, item) {
                    form.innerHTML += `
                        <input type="checkbox" class = "checkbox"/>${item.person.name}<br>
                        `
                });
            }
        });
    } else if(typeElem === 'Product'){
        $.ajax({
            type: "GET",
            url: '/api/v1/persons',
            headers: {"Authorization": authHeader},
            dataType: 'json',
            success: function (data) {
                form.innerHTML += `<h5>Personajes<h5>`
                $.each(data.persons, function (i, item) {
                    form.innerHTML += `
                        <input type="checkbox" class = "checkbox"/>${item.person.name}<br>
                        `
                });
            }
        });

        $.ajax({
            type: "GET",
            url: '/api/v1/entities',
            headers: {"Authorization": authHeader},
            dataType: 'json',
            success: function (data) {
                form.innerHTML += `<h5>Entidades<h5>`
                $.each(data.entities, function (i, item) {
                    form.innerHTML += `
                        <input type="checkbox" class = "checkbox"/>${item.entity.name}<br>
                        `
                });
            }
        });
    }
    form.innerHTML += `
     <input id="btn-Save-Create" class= "btn-Save" type="button"  value="Guardar">
     `
    document.querySelector('#btn-Save-Create').addEventListener('click',createElem);
});

$("#btn-Exit").click(function(){
    $(window).attr('location','pagWriter.html')
})

function createElem(){
    name = $('#nameElem').val();
    if(name === ''){
        window.alert("El campo nombre es obligatorio")
    } else {
        $.ajax({
            type: "POST",
            url: pathAPI(typeElem),
            headers: {"Authorization": authHeader},
            dataType: 'json',
            data:{
                name: $("#nameElem").val(),
                birthDate: $("#dateBirth").val(),
                deathDate: $("#dateDeadth").val(),
                imageUrl: $("#urlImg").val(),
                wikiUrl: $("#urlWiki").val(),
            },
            success: function () {
                alert(typeElem + " creado/a correctamente 😊");
                $(window).attr('location', 'pagWriter.html')
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
};

function pathAPI(type){
    let rutaApi = '';
    switch (type) {
        case 'Product':
            rutaApi='/api/v1/products';
            break;
        case 'Entity':
            rutaApi='/api/v1/entities';
            break;
        case 'Person':
            rutaApi='/api/v1/persons';
            break;
    }
    return rutaApi
}