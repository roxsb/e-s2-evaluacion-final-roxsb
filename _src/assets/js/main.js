'use strict';

//obtener el contenedor donde se pintará la lista
const listResult = document.querySelector('.list__results');
//obtener el elemento botón y añadirle un listener
const button = document.querySelector('.btn');

const handleButton = () => {
  //recoger la palabra escrita por el usuario
  const userSearch = document.querySelector('.input__name').value;
  search(userSearch);
};

button.addEventListener('click', handleButton);

//llamar a la API y crear una función para hacer la llamada a la Api según la búsqueda
function search (searchName){
  listResult.innerHTML='';

  fetch('http://api.tvmaze.com/search/shows?q=' + searchName)
    .then(function(response) {
      return response.json();
    })
    .then((seriesResponse) => {
      //Por cada elemento encontrado pintar una tarjeta
      draw(seriesResponse);
    });
}

//pintar los resultados obtenidos según la búsqueda
function draw (seriesResponse){
  for (const x of seriesResponse) {
    listResult.innerHTML +=
    `<li class="list__element">
      <h2 class="serie__title">${x.show.name}</h2>
      <img class="serie__image" src="${x.show.image.medium}" alt="${x.show.name}">
    </li>`;
  }
}
