'use strict';

//obtener el contenedor donde se pintará la lista
const listResult = document.querySelector('.list__results');
//obtener el elemento botón y añadirle un listener
const button = document.querySelector('.btn');
const listFavorites = [];
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
    // si existe image, pinta la url medium
    console.log(x.show.id);
    console.log(listFavorites.includes(x.show.id));
    if (x.show.image) {
      listResult.innerHTML +=`<li class="list__element" id="${x.show.id}">
      <span class="heart">❤︎</span>
      <h2 class="serie__title">${x.show.name}</h2>
      <img class="serie__image" src="${x.show.image.medium}" alt="${x.show.name}">
    </li>`;
    //si no existe,pinta la imagen predeterminada
    } else {
      listResult.innerHTML +=`<li class="list__element" id="${x.show.id}">
      <span class="heart">❤︎</span>
      <h2 class="serie__title">${x.show.name}</h2>
      <img class="serie__image" src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV" alt="${x.show.name}">
    </li>`;
    }
  }
  loveListener();
}

//añadir evento click a cada elemento heart creado
function loveListener(){
  const loves = document.querySelectorAll('.heart');
  for(const lovelyHeart of loves){
    lovelyHeart.addEventListener('click',addFavorite);
  }
}

//comprobar si el elemento padre tiene la clase favorite y si no la tiene añadirla
function addFavorite (e){
  const parent = e.currentTarget.parentElement;
  if(!parent.classList.contains('favorite')){
    parent.classList.add('favorite');
    // almacenar el id de ese favorito
    addFavoriteLS(parent.id);
    //al volver al ejecutar la función, si tiene la clase favorite, la elimina
  }else{
    parent.classList.remove('favorite');
    // Eliminar el identificador único de este favorito.
    removeFavoriteLS(parent.id);
  }
}
//añadir a favoritos y guardar en LS
function addFavoriteLS(value){
  const keyFav = 'keyfavorites';
  listFavorites.push(parseInt(value));
  console.log(listFavorites);

  //convertir JSON en string
  localStorage.setItem(keyFav, JSON.stringify(value));
  //obtener la información hay en localstorage y añadir el id
  let items = JSON.parse(localStorage.getItem(keyFav)) || [];

  // items.push(value);

  //Guardar el resultado en localstorage.
  localStorage.setItem(keyFav,items);
}

//eliminar de favoritos
function removeFavoriteLS(value){
  const keyFav = 'keyfavorites';
  localStorage.removeItem(keyFav,value);

}
