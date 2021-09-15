// Destructuring 

// With Arrays 
let spiceGirls = ["Baby", "Sporty", "Posh", "Scary"];
let spice1 = spiceGirls[0];
let spice2 = spiceGirls[1];
let spice3 = spiceGirls[2];
let spice4 = spiceGirls[3];

let [sp1, sp2, , sp4] = spiceGirls


// With Objects
const spiceObj = {name: "Ginger", outfit:{spiceWorld: "union jack dress"}, realName: "Geri"};
// let {outfit, name , realName} = spiceObj
// let {spiceWorld} = spiceObj.outfit
// Order does NOT matter 
// the naming of our variables must MATCH the keys
// matches with ONLY the top level of keys 
function spiceHTML({name, realName}){
    return `<div>
    <p>${name}</p>
    <p>${realName}</p>
    
    </div>`
}

let firstName = "Emma"
let tour = "Spice up your life"

let configObj = {
    method: "POST",
    body: JSON.stringify(
        {firstName, tour}
    )
}
// Spread Operator - allow us to make a copy of an object of an array 
let newObj = {...spiceObj}


const intitalState = {
    loggedIn: false, 
    toys: []
}

let state = {...intitalState}; //make a copy

state = {
    ...state, //keeping all the properties the same that we don't want to change 
    toys: ["Buzz", "Woody"],
    toyBox: true
}

// state = {
//     ...state, 
//     toyBox: true
// }

// state.toyBox = true;

let reunionTour = [...spiceGirls, "Ginger"]


// Arrow Functions

// function add2(n){
//     debugger
//  return + 2
// }

const add2 = (n) => {
    // debugger
    n + 2
}
// Class Syntax
// class Pet 
// end
// function newBark(){
//     console.log("Woof")
//     console.log(`Woof Woof! My name is ${this.name}`)
//     debugger
// }
class Pet {
    constructor(name, age, type){
        
        this.name = name 
        this.age = age 
        this.type = type 

        document.getElementById('bark').addEventListener('click', this.bark)
        // debugger
    }

    bark = () => {
        debugger
        console.log("Woof")
        console.log(`Woof Woof! My name is ${this.name}`)
    }
}






