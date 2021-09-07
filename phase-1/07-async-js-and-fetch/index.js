
//what is fetch?
//a simpler easy to use method for consuming asyncronouslu from a 3rd api
//also allows us to push and pull data from a server
//asynchronous 
//its just a method, ran on the windo which means it doesnt need to be called on anythign else

//how to use fetch
// fetch(endpoint, [options]***)
//     //*you dont always need to provide options
//     //gives a promises - like a reciept for your fetch transaction
//     //call .then() on the promise
// .then() //first then - do something with this promise // returns another promise
// .then() // second then - do something with the received data(promise)

//Default behavior of FETCH
//defaults to making a GET request
//use optiion to make another kind of request OTHER THAN GET

//promise - IOU from the server, and object
//has 3 different statuses: pending, fulfilled, or rejected


const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLikes(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function createPokemon(event) {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = event.target.querySelector("#img-input").value;

  const pokemon = {
    name: name,
    img: img,
    likes: 0,
    id: 6, // NEEDS TO CHANGE
  };
  renderPokemon(pokemon);
  pokeForm.reset();
}

function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
}

function deletePoke(card) {
  card.remove();
}

//function to get pokemon from the server
//THIS IS THE R IN CRUD - RETREIVING RESOURCES
function getPokemons(){
  //making get request to endpoint for the okject
  fetch('  http://localhost:3000/pokemons')
  //returns a promise
  //take promise and turn into json
  //MOST OF THE TIME first .then will be to take data and json-ify it
  //.then implicitly drops in response(promise object) to callback function
  .then(function(resp){
    return resp.json()
  }) //return another promise
  .then(function(pokemonsArray){
    //do something with pokemonsArray
    //this second .then is SPECIFIC to your application design
    pokemonsArray.forEach(function(pokemon){
      renderPokemon(pokemon)
    })
  })
}
//**making request to server for array and then iterationg over that array */


function init() {
  // pokemons.forEach(function(pokemon) {
  //   renderPokemon(pokemon);
  // });
  //replacing above code ^ with the getPokemons() function
  getPokemons()
  pokeForm.addEventListener("submit", createPokemon);
}

init();

//code along - 

function getChickens() {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
  .then(response) => {return response.json()}
  .then((data) => )
}