# JavaScript Functions

### Goals:
- Explain why functions are important in JS
- Understand the difference between declaring and invoking a function
- Understand what a first-class function is and why that matters in JS
- Create and use callback functions
- Understand function scope vs global scope


### Warm up question:

What are functions and why do we use them?

function init(){
    //preform a task/logic
    console.log("run the program")
    return "this is a return value"
}

const testingFunction = init()
console.log(testingFunction)

//function espressions

const createPokemon = function(){
    //anynomous function
    let pokemon = prompt('which pokenon are you today?')
    return pokemon
}

console.log(createPokemon());

//arrow function

const renderPokemon = () => {
    //task goes here
}

//rendering v invocation

//first class functions
    //MEANS
// assign a function to a variable 
//pass functions as an argument *** callback function
//use functions as a return value for another function *** function returning a function is a high order function

function sayName(name){
    return `Hi, I'm ${name}`
}

//accept a function as an arguemnt
//callback function

function greeting(callback){
    return callback("Amie")
}

//call function with name as argument
greeting(sayName); //<------ do not use ()

//passing a refrence to that function and then invoking it 