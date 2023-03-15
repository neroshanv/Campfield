// EventsAndThis
// Goal: each button generate random color




const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    //change the body's color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // use string template literal
    const newColor = `rgb(${r}, ${g}, ${b})`;

})

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
    }


const h1s = document.querySelectorAll('h1')
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();

}
// this - refer to whatver we clicked on in this case that triggered function being called   

// -----------------------------------------------------------------------------------

//not sure why i keep getting this error:

// ERROR: Uncaught ReferenceError ReferenceError: makeRandColor is not defined
//    at colorize (c:\Users\neros\Desktop\Code 1\JS\DOM\EventsAndThis\app.js:32:10)







// we need to generate a random color
// we need 3 random numbers since rgb follows that format

//rgb(200,123,34)df