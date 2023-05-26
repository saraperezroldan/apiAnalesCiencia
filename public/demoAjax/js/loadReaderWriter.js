
$(document).ready(function (){
    infoUser();
    showProducts(authHeader);
    showEntities(authHeader);
    showPersons(authHeader);
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

function showToken(authHeader) {
    let token = authHeader.split(' ')[1];   // Elimina 'Bearer '
    let myData = JSON.parse(atob(token.split('.')[1]));
    return myData;
}

function showProducts(authHeader) {
    $.ajax({
        type: "GET",
        url: '/api/v1/products',
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data) {
            //$('#tableProduct').html(JSON.stringify(data));
            let rol = showToken(authHeader).scopes;
            let container = document.querySelector('#tableProduct');
            container.innerHTML = '';
            $.each(data.products, function (i, item) {
                if (rol[0] === 'reader' && rol[1] === 'writer') {
                    container.innerHTML += `
                        <tr id=${item.product.id}>
                            <td><img src=${item.product.imageUrl} class="dimImg" alt="Img-product"><br> ${item.product.name}</td>
                            <td><button id="btnEdit" class = "btn-ED" onclick="editElem('${item.product.id}','Product')">Editar</button></td>   
                            <td><button id="btnDelete" class = "btn-ED" onclick="deleteElem('${item.product.id}','Product')">Borrar</button></td>
                                
                        </tr>       
                        `
                } else {
                    container.innerHTML += `  
                      <tr id = ${item.product.id}>
                         <td><img src = ${item.product.imageUrl} class="dimImg" alt="Img-product"><br>${item.product.name}</td>     
                      </tr>       
                    `
                }
            })
        }
    })
}

function showEntities(authHeader) {
    $.ajax({
        type: "GET",
        url: '/api/v1/entities',
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data) {
            let rol = showToken(authHeader).scopes;
            let container = document.querySelector('#tableEntity');
            container.innerHTML = '';
            $.each(data.entities, function (i, item) {
                if (rol[0] === 'reader' && rol[1] === 'writer') {
                    container.innerHTML += `
                        <tr id=${item.entity.id}>
                            <td><img src=${item.entity.imageUrl} class="dimImg" alt="Img-entity"><br> ${item.entity.name}</td>
                            <td><button id="btnEdit" class = "btn-ED" onclick="editElem('${item.entity.id}','Entity')">Editar</button></td>   
                            <td><button id="btnDelete" class = "btn-ED" onclick="deleteElem('${item.entity.id}','Entity')">Borrar</button></td>    
                        </tr>       
                        `
                } else {
                    container.innerHTML += `  
                      <tr id = ${item.entity.id}>
                         <td><img src = ${item.entity.imageUrl} class="dimImg" alt="Img-entity"><br>${item.entity.name}</td>     
                      </tr>       
                    `
                }
            })
        }
    })
}

function showPersons(authHeader) {
    $.ajax({
        type: "GET",
        url: '/api/v1/persons',
        headers: {"Authorization": authHeader},
        dataType: 'json',
        success: function (data) {
            let rol = showToken(authHeader).scopes;
            let container = document.querySelector('#tablePeople');
            container.innerHTML = '';
            $.each(data.persons, function (i, item) {
                if (rol[0] === 'reader' && rol[1] === 'writer') {
                    console.log(data.persons)
                    container.innerHTML += `
                        <tr id=${item.person.id}>
                            <td><img src= ${item.person.imageUrl} class="dimImg" alt="Img-person"><br>  ${item.person.name}</td>
                            <td><button id="btnEdit" class = "btn-ED" onclick="editElem('${item.person.id}','Person')">Editar</button></td> 
                            <td><button id="btnDelete" class = "btn-ED" onclick="deleteElem('${item.person.id}','Person')">Borrar</button></td>      
                        </tr>       
                        `
                } else {
                    container.innerHTML += `  
                      <tr id = ${item.person.id}>
                         <td><img src = ${item.person.imageUrl} class="dimImg" alt="Img-person"><br>${item.person.name}</td>     
                      </tr>       
                    `
                }
            })
        }
    })
}

typeElem = (type) => {
    sessionStorage.setItem('tipoElem',type);
    $(window).attr('location','formCreate.html');
}

$("#btn-Logout").click(function(){
    sessionStorage.clear();
    $(window).attr('location','index.html');
})

$("#btn-Users").click(function(){
    $(window).attr('location','gestionUsers.html');
})

$("#btn-Profile").click(function(){
    $(window).attr('location','editUser.html')
})


function deleteElem(id, typeElem) {
    let confirmar = confirm("Estas seguro de eliminar este elemento?");
    if(confirmar){
        $.ajax({
            type: "DELETE",
            url: pathAPI(typeElem)+'/'+ id,
            headers: {"Authorization": authHeader},
            dataType: 'json',
            data: id,
            success: function () {
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
function editElem(id,typeElem) {
    sessionStorage.setItem('tipoE', typeElem);
    sessionStorage.setItem('idElemento',id);
    $(window).attr('location', 'formEdit.html')
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
