// Event Bubbling

// - so an event is going to be triggered first on some element.



// 3 things here that each have their own listener.
// the order is what matters



// change color of button

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    // the event bubbles up to the top and we can stop that by using event or whatever our event oject is called stopPropagation
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toogle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}