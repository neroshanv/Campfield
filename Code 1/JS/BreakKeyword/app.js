
//whatever you type in prompt will be true
//whatever you type in prompt will repeat back in prompt
//when you type " stop copying me" is when break; will stop the loop
//console will show "ok you win!" 


let input = prompt("hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me")
        break;

}
console.log("ok you win!")

