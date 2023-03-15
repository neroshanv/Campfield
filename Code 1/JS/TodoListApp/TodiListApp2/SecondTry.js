



// first part of code
let input = prompt("what would you like to do?")
// next step is to store ToDos and going to make a list in array
// place to store ToDos in const since it cannot be changed
// put something in the array to have options
const todos = ['Collect Chicken Eggs', 'Clean box'];
// while actviates only when it's true
// if quit or q been entered then console.log will run
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}; ${todos[i]}`);
        }
        console.log('****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log('${newTodo} added to the list!')
    } else if (input === 'delete') {
        const index = prompt('Ok, enter an index to delete!')
        const deleted = todos.splice(index, 1);
        console.log(index);
    }
}
console.log("you quit the app");


// INCOMPLETE

// kept crashing 