alert("Welcome to Space Battle")

alert("You are the captain of the USS SChwarzenegger, on a mission to destroy all SIX alien ships. ")

prompt("Choose your level (beginner or advanced.")


let result = alert('ATTACK the first alien ship!')

console.log (result)

let ussShip; //declared in global scope

function ussShip (hull, firepower, accuracy) {

this.hull = hull;
this.firepower = firepower;
this.accuracy = accuracy;
};

let alienShip // declared in global scope
function alienShip (hull, firepower, accuracy) {

this.hull = hull;
this.firepower = firepower;
this.accuracy = accuracy;
};

let start = {
    // name: function () {
    //     ussShip = new ussShip();
    //     }
    }

// const alienShip = {
//   attack () { 
//     console.log(alert ('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'))
//   }
// };

// alienShip.attack();

// attack = () => {
//     let min = (Math.random() * (Math.floor(5)))
//     let max = (Math.random() * (Math.floor(5)))
//     let damage = Math.random() * (max - min) + min;
//     damage = Math.ceil(damage);
//     alert("Oh no the ship has survived. Your enemies strength is depleting")
// }


// function startGame() {
//     state = {}
//     showinstructions
// }

// alert("ATTACK the first alien ship.")

// alert("Oh no the ship has survived. Your enemies strength is depleting")

// prompt("Will you attack or retreat? (Note*- If you retreat you lose- Game Over!)")

// alert("CONGRATS you have succesfully defeated the enemy ship!")

// const instructions = [
//     (
//         id: 1,
//         text: "ATTACK the first alien ship."
//     )
// ]

// startGame ()