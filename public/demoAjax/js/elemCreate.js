window.addEventListener('load',loadForm = () =>{

    let form = document.getElementById('formCreate');
    let type = sessionStorage.getItem('tipoElem');

    form.innerHTML = ''
    form.innerHTML += `
            <h3>Crear `+ type +`</h3>
      		<pre>Nombre: <input id='nameElem' type="text" required maxlength="40"> </pre>
      		<pre>Fecha nacimiento/creación: <input id='dateBirth' type ="date"></pre>
       		<pre>Fecha fallecimiento/desuso: <input id='dateDeadth' type="date"></pre>
      		<pre>Imagen: <input id='urlImg' type="text"></pre>
      		<pre>Wikipedia: <input id='urlWiki' type = "text"></pre>
     `

    if (type === 'Entity'){
        form.innerHTML += `<h5>Personajes<h5>`
        // for (const index in Persons) {
        //     form.innerHTML += `
        // <input type="checkbox" class = "checkbox"/>`+Persons[index].name+`<br>
        // `
        // }

    } else if(type === 'Product'){
        form.innerHTML += `<h5>Personajes<h5>`
        // for (const index in Persons) {
        //     form.innerHTML += `
        // <input type="checkbox" class = "checkboxPerson"/>`+Persons[index].name+`<br>
        // `
        // }
        form.innerHTML += `<h5>Entidades<h5>`
        // for (const index in Entities) {
        //     form.innerHTML += `
        // <input  type="checkbox" class = "checkboxEntity"/>`+Entities[index].name+`<br>
        // `
        // }
    }
    form.innerHTML += `
     <input id="btnCreate" class= "btnSave" type="button"  value="Guardar">
     `
    //document.getElementById('btnCreate').addEventListener('click', saveForm);
});

// saveForm = () =>{
//
//     let type = localStorage.getItem('tipoElem');
//
//     let Products = JSON.parse(localStorage.getItem('products'));
//     let Persons = JSON.parse(localStorage.getItem('persons'));
//     let Entities = JSON.parse(localStorage.getItem('entities'));
//
//     let entityPersonSelect =[];
//     entityPersonSelect = JSON.parse(localStorage.getItem('relationEntityPerson'));
//
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
//             if(checkbox.checked){
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
//             if(checkbox.checked){
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
//     switch(type){
//         case 'Product':
//             let sizeProduct = Products.length;
//             let idP = sizeProduct;
//             Products[sizeProduct] = {
//                 "id": idP,
//                 "name": name,
//                 "birth": birth,
//                 "death": death,
//                 "image": urlImg,
//                 "wiki": urlWiki,
//                 "pageWeb": pageWeb,
//                 "persons":relationProductPerson,
//                 "entities":relationProductEntity
//             };
//             break;
//         case'Person':
//             let sizePerson = Persons.length;
//             let idPe = sizePerson;
//             Persons[sizePerson] = {
//                 "id": idPe,
//                 "name":name,
//                 "birth": birth,
//                 "death": death,
//                 "image": urlImg,
//                 "wiki": urlWiki,
//                 "pageWeb": pageWeb,
//             };
//             break;
//         case 'Entity':
//             let sizeEntity = Entities.length;
//             let idE = sizeEntity;
//             Entities[sizeEntity]={
//                 "id": idE,
//                 "name" :name,
//                 "birth": birth,
//                 "death": death,
//                 "image": urlImg,
//                 "wiki": urlWiki,
//                 "pageWeb": pageWeb,
//                 "persons": relationEntityPerson
//             };
//             break;
//     }
//
//     localStorage.setItem('products', JSON.stringify(Products));
//     localStorage.setItem('persons', JSON.stringify(Persons));
//     localStorage.setItem('entities', JSON.stringify(Entities));
//
//     window.location.href="/html/pageWriter.html";
// }

$("#btn-Exit").click(function(){
    $(window).attr('location','pagWriter.html')
})