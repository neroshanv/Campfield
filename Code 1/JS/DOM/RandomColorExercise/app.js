// RandomColorExercise:
// Objective: everytime you click button the body changes color





const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    //change the body's color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // use string template literal
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})


// we need to gererate a random color
// we need 3 random numbers since rgb follows that format

//rgb(200,123,34)