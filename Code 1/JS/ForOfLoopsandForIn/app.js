// // difference betwen For loops and For..OF loops


// //For loop
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }


// // OR


// // ForOF loop
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// // same outcome!




// // ForIn Loop

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60

}


// this will only show key in the objects as in the names on the list
// "in" is not commonly used
for (let person in testScores) {
    console.log(person);
}


// in order to get both name and score we do this
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}





//Another option new option

//in console

//Object.keys(testScores)
// show all the names in an array


