window.addEventListener('load',cargaForm = () =>{

    let formEdit = document.getElementById('formEdit');
    let type =sessionStorage.getItem('tipoElem');
    let edit = JSON.parse(sessionStorage.getItem('editarElem'));

    formEdit.innerHTML = ''
    formEdit.innerHTML += `
            <h3>Editar `+ type +`</h3>
            <pre>Nombre:<input id='nameElem' type="text" value="`+ edit.name +`"required maxlength="40"></pre>
      		<pre>Fecha nacimiento/creación: <input id='dateBirth' type ="date" value="`+ edit.name +`"></pre>
       		<pre>Fecha fallecimiento/desuso: <input id='dateDeadth' type="date" value="`+ edit.death +`"></pre>
      		<pre>Imagen: <input id='urlImg' type="text" value="`+ edit.image +`"></pre>
      		<pre>Wikipedia: <input id='urlWiki' type = "text" value="`+ edit.wiki +`"></pre>
     `

    if (type === 'Entity'){
        formEdit.innerHTML += `<h5>Personajes<h5>`
        // for (const index in Persons) {
        //     if (Persons[index].id === edit.persons[index]){
        //         formEdit.innerHTML += `
        //     <input type="checkbox" id ="EntityPerson `+ index +` class = "checkbox" " checked/>`+Persons[index].name+`<br>
        //     `
        //     } else{
        //         formEdit.innerHTML += `
        //     <input type="checkbox" id ="EntityPerson `+ index +`" class = "checkbox"/>`+Persons[index].name+`<br>
        //     `
        //     }
        // }

    } else if (type === 'Product'){
        formEdit.innerHTML += `<h5>Personajes<h5>`
        // for (const index in Persons) {
        //     if (Persons[index].id === edit.persons[index]){
        //         formEdit.innerHTML += `
        //     <input type="checkbox" id ="ProductPerson `+ index +`" class = "checkboxPerson" checked/>`+ Persons[index].name+`<br>
        //     `
        //     } else{
        //         formEdit.innerHTML += `
        //     <input type="checkbox" id ="ProductPerson `+ index +`" class = "checkboxPerson"/>`+ Persons[index].name+`<br>
        //     `
        //     }
        // }

        formEdit.innerHTML += `<h5>Entidades<h5>`
        // for (const index in Entities) {
        //     if (Entities[index].id === edit.entities[index]){
        //         formEdit.innerHTML += `
        //     <input type="checkbox" id ="ProductEntity `+ index +`" class = "checkboxEntity" checked/>`+ Entities[index].name +`<br>
        //     `
        //     } else{
        //         formEdit.innerHTML += `
        //     <input type="checkbox" id ="ProductEntity `+ index +`" class = "checkboxEntity"/>`+ Entities[index].name +`<br>
        //     `
        //     }
        // }
    }

    formEdit.innerHTML += `
      <input id="btnEdit" class= "btnSave" type="button"  value="Guardar">
       `
    document.getElementById('btnEdit').addEventListener('click', saveEdit);
});

// saveEdit = () =>{
//
//     let type =localStorage.getItem('tipoElem');
//     let edit = JSON.parse(localStorage.getItem('editarElem'));
//
//     let Products = JSON.parse(localStorage.getItem('products'));
//     let Persons = JSON.parse(localStorage.getItem('persons'));
//     let Entities = JSON.parse(localStorage.getItem('entities'));
//
//     let name = document.getElementById('nameElem').value;
//     let birth = document.getElementById('dateBirth').value;
//     let death = document.getElementById('dateDeadth').value;
//     let urlImg = document.getElementById('urlImg').value;
//     let urlWiki = document.getElementById('urlWiki').value;
//     let pageWeb = document.getElementById('urlmiWeb').value;
//
//     if (type === 'Entity'){
//         let EntityPersonSelect = [];
//         let checkboxes = document.querySelectorAll('.checkbox')
//         for (let i = 0; i < checkboxes.length; i++) {
//             const checkbox = checkboxes[i];
//             if (checkbox.checked){
//                 EntityPersonSelect.push(i)
//             }
//         }
//         localStorage.setItem('EntityRelationPerson', JSON.stringify(EntityPersonSelect));
//     }
//
//     if (type === 'Product'){
//         let ProductPersonSelect = [];
//         let ProductEntitySelect = [];
//         let checkboxesPerson = document.querySelectorAll('.checkboxPerson')
//         let checkboxesEntity = document.querySelectorAll('.checkboxEntity')
//
//         for (let i = 0; i < checkboxesPerson.length; i++) {
//             const checkbox = checkboxesPerson[i];
//             if(checkbox.checked){
//                 ProductPersonSelect.push(i)
//             }
//         }
//
//         for (let i = 0; i < checkboxesEntity.length; i++) {
//             const checkbox = checkboxesEntity[i];
//             if (checkbox.checked){
//                 ProductEntitySelect.push(i)
//             }
//         }
//
//         localStorage.setItem('ProductRelationPerson', JSON.stringify(ProductPersonSelect));
//         localStorage.setItem('ProductRelationEntity', JSON.stringify(ProductEntitySelect));
//     }
//
//     let relationEntityPerson = JSON.parse(localStorage.getItem('EntityRelationPerson'));
//     let relationProductPerson = JSON.parse(localStorage.getItem('ProductRelationPerson'));
//     let relationProductEntity = JSON.parse(localStorage.getItem('ProductRelationEntity'));
//
//     switch (type)
//     {
//         case 'Product':
//             Products.splice(edit.id, 1, {
//                 "id": edit.id,
//                 "name": name,
//                 "birth": birth,
//                 "death": death,
//                 "image": urlImg,
//                 "wiki": urlWiki,
//                 "pageWeb": pageWeb,
//                 "persons":relationProductPerson,
//                 "entities":relationProductEntity
//             });
//             break;
//         case 'Entity':
//             Entities.splice(edit.id, 1, {
//                 "id": edit.id,
//                 "name": name,
//                 "birth": birth,
//                 "death": death,
//                 "image": urlImg,
//                 "wiki": urlWiki,
//                 "pageWeb": pageWeb,
//                 "persons": relationEntityPerson
//             });
//             break;
//         case'Person':
//             Persons.splice(edit.id, 1, {
//                 "id": edit.id,
//                 "name": name,
//                 "birth": birth,
//                 "death": death,
//                 "image": urlImg,
//                 "wiki": urlWiki,
//                 "pageWeb": pageWeb
//             });
//             break;
//     }
//
//     localStorage.setItem('products', JSON.stringify(Products));
//     localStorage.setItem('persons', JSON.stringify(Persons));
//     localStorage.setItem('entities', JSON.stringify(Entities));
//
//     window.location.href="/html/pageWriter.html";
// }
