'use strict';

//comprobar que funciona el js

const pepi = document.querySelector('.page__title');
pepi.innerHTML = 'Buscador de unicornios';

//obtener el contenedor donde se pintará la lista
const listResult = document.querySelector('.list__results');

//llamar a la API y crear una función para hacer la llamada a la Api según la búsqueda

function search (searchName){

  fetch('http://api.tvmaze.com/search/shows?q=' + searchName)
    .then(function(response) {
      return response.json();
    })
    .then((seriesResponse) => {
      //Por cada elemento encontrado pintar una tarjeta
      for (const x of seriesResponse) {
        listResult.innerHTML +=
        `<li class="list__element">
          <h2 class="serie__title">${x.show.name}</h2>
          <img class="serie__image" src="${x.show.image}" alt="${x.show.title}">
        </li>`;
      }
    });

}

//obtener el elemento botón y añadirle un listener
const button = document.querySelector('.btn');
const handleButton = () => {
  //recoger la palabra escrita por el usuario
  const userSearch = document.querySelector('.input__name').value;
  console.log(userSearch);
  search(userSearch);
};

button.addEventListener('click', handleButton);

// .then((seriesData) => {
  //   //añadir la palabra buscada a la url
  //   const data = seriesData.message;
  //   return fetch('http://api.tvmaze.com/search/shows?q=' + data[0] + 'http://static.tvmaze.com/uploads/images/medium_portrait/');
  // });

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

