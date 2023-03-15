//While loops

// while loops continue running as long as the test condition is true.

// let num = 0;
// while (num < 10) {
// console.log(num);
// num++;
// }

//output:
//0
//1
//2
//3
//4


//while loop will only complete once the secret code "BabyHippo" is inputted in prompt
//then console.log will run "CONGRATS"


// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code");
// while (guess !== SECRET) {
// guess = prompt("enter the secret code");
// }
// console.log("CONGRATS")


const SECRET = "BabyHippo";

let guess = prompt("enter the secret code..");
while (guess !== SECRET) {
    guess = prompt("enter the secret code..");

}

console.log("CONGRATS YOU GOT THE SECRET!!");