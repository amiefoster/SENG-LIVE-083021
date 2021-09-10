//GET - retreive resources
//POST - create new resource
//PUT - update existing resource
//PATCH - delete resource

const BASE_URL = 'http://localhost:3000/pokemons'
const COMMENT_URL = 'http://localhost:3000/comments'
//making a fetch request
    //need URL as an argument
    //fetch is asynchronous
  fetch(BASE_URL) //produces a promise
      //what is a promise? its an IOU/reciept
    .then(resp => resp.json()) //taking response from readable string INTO json so its easier to use 
    //.then() method syas once promise has been fufilled THEN you do something after
    //returns another promise where our result Array lives
    .then(data => console.log(data))


const pokemon = {name: "Pikachu"}
const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPokemon(pokemon) {
  // Add a debugger here and investigate pokemon
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
  // likeBttn.addEventListener("click", () => {debugger});

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

  const pokemon = { //plain old javascript object NOT json
    name: name,
    img: img,
    likes: 0,
    // id: 6, // NEEDS TO CHANGE - dont need ID because it will be assigned one automatically
  };

  const configObj = {
    method: 'POST', //overwriting default GET request
    headers: {
        'Accept': 'application/json', //dont always need accept
        'Content-Type': 'application/json' //do need Content-Type
    },
    //give request the data were sending back to endpoint
    body: JSON.stringify(pokemon) //want to stringify becase thats how the webcommunicates IN STRINGS
  }
  //the url we are sending data to 
fetch(BASE_URL, configObj)
.then(function(resp){
  return resp.json()
})
.then(function(pokemon) {
  console.log(pokemon)
  renderPokemon(pokemon)

  //do something with it
})

  renderPokemon(pokemon);
  console.log(pokeForm)
  pokeForm.reset();


}


function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
}

function deletePoke(card) {
  card.remove();
}

function getPokemons() {
  fetch("http://localhost:3000/pokemon")
    .then(function (response){
      return response.json();
    })
    .then(function (pokemonsArray) {
      // debugger;
      // console.log("checking value of pokemon inside getPokemons", pokemon)
      pokemonsArray.characters.forEach(function (pokemon) {
        renderPokemon(pokemon);      
      });
    })
}

function handleSubmit(e) {
    e.preventDefault();
    fetch(COMMENT_URL)
    .then(response => response.json())
    .then(function (data) {
        console.log(data.content)
    })

}

function init() {
  getPokemons();
  pokeForm.addEventListener("submit", createPokemon);

  //make new form - in HTML
//add submit event listener to comment form
//how?
//where?
const commentForm = document.getElementById('comment-form')

commentForm.addEventListener('submit', handleSubmit)
//have comment
//update comment from server
}

init();






