let etag = null;

$(document).ready(function (){
    let authHeader= sessionStorage.getItem('Authorization');
    let id = sessionStorage.getItem('idElemento');
    let typeElem = sessionStorage.getItem('tipoE');
    let edit = null;

    $.ajax({
        type: "GET",
        url: pathAPI(typeElem)+'/'+ id ,
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data)  {
            let formEdit = document.querySelector('#formEdit');
            formEdit.innerHTML = '';
            switch (typeElem) {
                case 'Product':
                    edit = data.product;
                    break;
                case 'Entity':
                    edit = data.entity;
                    break;
                case 'Person':
                    edit = data.person;
                    break;
            }

            formEdit.innerHTML += `
                <h3>Editar `+ typeElem +`</h3>
                <pre>Id:<input id='idElem' type ="text" value="`+ edit.id +`" disabled ></pre>
                <pre>Nombre:<input id='nameElem' type="text" value="`+ edit.name +`" required maxlength="40"></pre>
                <pre>Fecha nacimiento/creación: <input id='dateBirth' type ="date" value="`+ edit.birthDate +`"></pre>
                <pre>Fecha fallecimiento/desuso: <input id='dateDeadth' type="date" value="`+ edit.deathDate+`"></pre>
                <pre>Imagen: <input id='urlImg' type="text" value="`+ edit.imageUrl +`"></pre>
                <pre>Wikipedia: <input id='urlWiki' type = "text" value="`+ edit.wikiUrl +`"></pre>
                <br>
            `
            if (typeElem === 'Entity'){
                formEdit.innerHTML += `<h5>Personajes<h5>`

            } else if (typeElem === 'Product'){
                formEdit.innerHTML += `<h5>Entidades<h5>`
                }
            formEdit.innerHTML += `
                <input id="btn-Edit" class= "btn-Save" type="button" value="Actualizar">
                `
            document.querySelector('#btn-Edit').addEventListener('click', saveEditElem);
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

function saveEditElem(){

    let authHeader = sessionStorage.getItem('Authorization');
    let id = sessionStorage.getItem('idElemento');
    let typeElem = sessionStorage.getItem('tipoE');

    let confirmar = confirm("Estas seguro de modificar el elemento?");
    if(confirmar){
        $.ajax({
            type: "PUT",
            url: pathAPI(typeElem)+'/'+id,
            headers: {"Authorization": authHeader,"If-Match": etag},
            dataType: 'json',
            //data:  $("#formEdit").serialize() ,
            data:{
                name: $("#nameElem").val(),
                birthDate: $("#dateBirth").val(),
                deathDate: $("#dateDeadth").val(),
                imageUrl: $("#urlImg").val(),
                wikiUrl:$("#urlWiki").val(),
            },
            success: function (data) {
                alert("Se han guardado los cambios correctamente");
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
}

function savePersonChanges(id){

    let urlParams = new URLSearchParams(window.location.search);
    let authHeader = urlParams.get('key');

    $.ajax({
        type: "PUT",
        url: '/api/v1/persons/' + id,
        headers:{"Authorization" : authHeader, "If-Match": localStorage.getItem("eTag")},
        dataType: 'json',
        data: {
            name: $("#edit-person-name").val(),
            birthDate: $("#edit-person-birthDate").val(),
            deathDate: $("#edit-person-deathDate").val(),
            imageUrl: $("#edit-person-imageUrl").val(),
            wikiUrl:$("#edit-person-wikiUrl").val(),
        },
        success:function(data){
            console.log(data);
            window.close();
            alert("Se han guardado los cambios correctamente");
        }
    })
}

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

$("#btn-Back").click(function(){
    $(window).attr('location','pagWriter.html')
})