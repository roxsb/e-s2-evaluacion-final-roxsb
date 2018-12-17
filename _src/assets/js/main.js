'use strict';

console.log('>> Ready :)');

'use strict';

//comprobar que funciona el js
console.log('>> Ready :)');
const pepi = document.querySelector('.page__title');
pepi.innerHTML = 'Buscador de unicornios';


//recoger la palabra escrita por el usuario
const userSearch = document.querySelector('.input__name');
console.log(userSearch);


//llamar a la API

fetch('http://api.tvmaze.com/search/shows?q=')
  .then(seriesResponse => seriesResponse.json())
  .then(seriesData => {
    //añadir la palabra buscada a la url
    const data = seriesData.message;
      return fetch('http://api.tvmaze.com/search/shows?q=' + data[0] + 'http://static.tvmaze.com/uploads/images/medium_portrait/');
  })
    //   "show":""{
    //   "name":"",
    //   "imagen":"",
    // }};

    //Por cada elemento encontrado pintar una tarjeta
    for (const x of data) {
      listResult.innerHTML +=
      `<li class="list__element">
        <h2 class="serie__title">${x.name}</h2>
        <img class="serie__image" src="${x.image}" alt="${x.title}">
      </li>`;
  };



//evento del botón
const button = document.querySelector('.btn');
const handleButton = () =>
// console.log('hola, soy un botón y te hago caso');
console.log(userSearch);
button.addEventListener('click', handleButton);


// const button = document.querySelector('.btn')[0];
// button.addEventListener('click',function(event){
//     //obtener el nombre introducido por la usuaria
//     const userSearch = parseInt(document.querySelector('.input__name')[0].innerHTML);
//     const listElement = document.querySelector('.list__element');

//     //muestra las comprobaciones
//     if(x.name.includes(userSearch)  ){
//       let result = 'estas son las series con la palabra ${name}';
//       listElement.innerHTML = result; //muestra las series resultado de la comprobación

//     }else{
//   }
// });

