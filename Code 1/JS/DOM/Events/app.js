// 254. Intro to Events

// events are the keys for creating any sort of interactive websites, doing anything in response to what users are doing


// this comes down to responding to running code when a user does certain things like:
// clicks       // mouse wheel
// dragging     // double click
// drops        // copying
// hovers       // pasting
// scrolls      // audio start
// form submission  // screen resize
// key presses  // printing
// focus/blur



// 255. Inline Events

// 3 ways that we can use to respond to user events


// Ex. run somple code when a user clicks on something
// 3 ways of doing this
// 1st way is in index.HTML



// 256. The Onclick property

// 2nd way of doing this
document.querySelector('v2')


// we can set a function when we click v2 button
Btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!");
}


function scream() {
    console.log("AHHHHHHH");
}

Btn.onmouseenter = scream;

// output everytime you hover mouse over the button : AHHHHHHH

document.querySelector('h1').onclick = () => {
    alert('YOU CLICKED THE h1')
}
// one line code connecting onclick with arrow function



// 257. addEventListener

// 3rd way of doing this

// addEventListere - Specify the event type and a callback to run
//                  - we can pass in any sort of event
// ex.

// 1. we want to listen for a click, a double click, a mouse enter.
// we pass in the string
// 2. second argument is our callback function, the code that we want to run when that event actually happens

const button = document.querySelector('h1');
// second arguement
button.addEventListener('click', () => {
    alert("you clicked me!!")
})


// v3 button ex

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED")
})


// tas button ex


function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}


const tasButton = document.querySelector('#tas');

tasButton.onclick = twist;
tasButton.onclick = shout;

// in this ex. it shows that we can't have two different callback functions for the same event.
// since we started off with twist, only twist will call in
// aleast not using this property method or approach


// this allows us to have as many different callbacks as we want
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
// output: twist
//          shout







