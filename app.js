// Make the USS_Schwarzenegger an object
// Make a single alien ship object
// Make a method for the USS_Schwarzenegger to attack
//  - the target can be an input to the method
//  - run the method and pass it to the alien ship.
//  - the method reduces the targets hull by the firepower of the USS_Schwarzenegger
// Make a game object
// Make a method in the game object that will run a 'check win' for the health of the aliens +/ USS_Schwartzenegger
// Make a method for the alien to attack
// Make it so the attacks keep occuring until someone's hull is at 0. (repeat)
// Make the rest of the alien ships (slightly different)with class
// Make a loop that calls the class and generates the alien ships
// Try out the game w/ the first ship in the array
// Run battle w/ all ships in turn.
// Move functions into the game object.

// --------------------------------------------------
// let ussShip;
// let alienShip;

// function game() {
//     checkWin ();
//     ussShip = new schwarz();
//     alienShip = new 
// }

// function attack () {
//     fight()
// }

// 1. Make USS_Schwarzenegger an object

class UssShip {
    constructor (hull, firepower, accuracy) {
this.hull = 20,
this.firepower = 5,
this.accuracy = .7;
this.attack () {
    
}



// 3. Make a method for USS_Schwarzenegger to attack
//  attack () {
//     console.log(alert('You just attacked the enemy!'))
//  }

}

const schwarz = new UssShip

console.log(schwarz)

// 2. Make alien ship an object

class AlienShip {
    constructor (hull, firepower, accuracy) {
this.hull = Math.floor(Math.random() * 4) + 3;
this.firepower = Math.floor(Math.random() * 3) + 2;
this.accuracy = (Math.floor(Math.random() * 3) + 6)/ 10;
    }
}

const enemy = new AlienShip

console.log(enemy)

let enemy = [enemy1, enemy2, enemy3, enemy4, enemy5];
for (let i = 0; i<7; i++) {
    enemy[i] = new Enemy();
}

let attack = function() {
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].attack();
    }
}

// if (hull <= 0) {
//     console.log(alert(' The alien ship has been destroyed!'))
// } else {
//     console.log(alert("CONGRATS you have succesfully defeated the enemy ship!"))
// }
// // let defeat = math.floor(Math.random() * Math.floor(10));
// // let result = damage + defeat;
// }

// let start = {
//     // name: function () {
//     //     ussShip = new ussShip();
//     //     }
//     }

// let accuracy = Math.floor(Math.random() * Math.floor(3));
// console.log(accuracy);
//     if alienShip = 

// let attack = function() {
//     let damage;
//     if (accuracy > 1) {
//         damage = hull * firepower;
//     } else {
//         console.log(alert("CONGRATS you have succesfully defeated the enemy ship!"))
//     }
//     // let defeat = math.floor(Math.random() * Math.floor(10));
//     // let result = damage + defeat;
// }






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

// alert("Welcome to Space Battle")

// alert("You are the captain of the USS SChwarzenegger, on a mission to destroy all SIX alien ships. ")

// prompt("Choose your level (beginner or advanced.")


// let result = alert('ATTACK the first alien ship!')

// console.log (result)

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