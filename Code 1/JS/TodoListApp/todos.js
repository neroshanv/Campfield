// create prompt where it ask us what to do 
// Add while loop so if user types in 'quit', console will show "OK QUIT THE APP". Remember while loop activates when condition is true. condition is 'quit'
// same concept goes for 'q' ^ ^ ^
// if condition is not true, prompt will continue to ask " what would you like to do" 

let input = prompt("what would you like to do?")
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')

        // need to print out each todos from array
        // start off with 0, implementing i (as in "i++"), and stop before we hit the length of the array 
        for (let i = 0; i < todos.length; i++) {

            // print out a string and easiest option is string template literal as in "${}"
            // ${i} - shows i
            // ${todos[i]} - array starting from 0
            console.log(`${i}: ${todos[i]}`);

        }
        console.log('************')
    }

    // creating "new"
    // todos.push - adds one or more element to the end of an array and returns the new length of the array
    // side note: we are reassigning "input" over and over 
    else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }

    // creating "delete"
    // we need to ask what to delete
    // one option is to use splice method 
    // with splice option, it will remove whatever the user enters (index) and only 1 index is element
    // ask user what to delete and immediatly look for numbers with parseInt
    // if index not recognized then output "Unknown index"
    // !Number.isNAN is looking for not a number
    // !Number.isNAN is true then we will delete from your todo
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else if (
            console.log('Unknown index')
        );

    }


    input = prompt("what would you like to do?")
}
console.log("OK QUIT THE APP!")