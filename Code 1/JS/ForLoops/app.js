//console.log("hello")
//let random = Math.random();
//if (random < 0.5) {
//    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
//    console.log(random);
//}


// const dayOfWeek = 'Saturday ';  // chose const because we are not going to be changing variable

// if (dayOfWeek === 'Monday') {
// console.log("UGHHH I HATE MONDAYS!")
// }

// else if (dayOfWeek === 'Saturday') {  // this condition will only run if 'Saturday' is true
// console.log("YAY I LOVE SATURDAYS")

// }

// else if (dayOfWeek === 'Friday') {
// console.log("FINALLY WEEKEND IS HERE!")
// }


// const password = prompt("Please enter a new password");

// //Password must be 6+ characters
// if (password.length >= 6) {
//     //Password cannot include space
//     if (password.indexOf(' ') === -1) {

//         // .indexOf determines to find character
//         //.indexOf(' ') if i look for something like ' ' as in space, it gives me -1. we want the password to have ' ' = -1
//         // -1 determines there is no space!
//         console.log("Good job! No Space!")
//     }
//     else {
//         console.log("Password cannot contain spaces!")
//     }

// }
// else {
//     console.log("password too short!, must be 6+ characters")
// }


// let movieline = ['tom', 'nancy']






//LOOPS !!!! 

//for (let i = 1; i <= 6; i++) {
//console.log("Da ba dee da ba daa");
//}



// for (let i = 25; i <= 0; i -= 5) {
// console.log(i);
// }



// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i <= 4; i++) {
// console.log(people[i].toUpperCase());
// }



// const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i <= 2; i++) {
// console.log(i, animals[i])
// }




// since the loop already did the math of outputing the animals in bottom to top, we have to console.log animals by itself
// we start off with the highest index in animals, that's why it's "-1" 
// greater than or equal to 0
// and substract i each time
// in console.log we need to access [i], "i" already did the loop for us 
const animals = ['lion', 'tigers', 'bears'];

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i]);
}
