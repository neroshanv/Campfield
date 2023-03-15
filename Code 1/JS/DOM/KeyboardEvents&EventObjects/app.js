// 261. Keyboard Events & Events Objects

// Event Object - automatically passed in to our callback 
// reason behind all this, we often need to rely on the event object when we're working with keyboard events because 
// frequently we want to know what key was pressed and that information is included in the keyboard event object.



// evt - event
document.querySelector('button').addEventListener('click', function (evt) {
    alert("CLICK")
})

// we need want to know what key was pressed
const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e)
})

// console.log:
// 2 things we care about
//      code:
//      key:








// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })