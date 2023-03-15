
//parseInt looks for number only



let maximum = parseInt(prompt("Enter the maximum number!"));

// now you have to enter a number since while loop must be true to run
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));

}

//what happens when user enters number in prompt
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = (prompt("Too high! Enter a new guess:")
    } else {
        guess = (prompt("too Low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log("Ok Quit!")
} else {
    console.log("CONGRATS YOU WIN!!")
    console.log(`you got it! It took you ${attempts} guesses`)
}

