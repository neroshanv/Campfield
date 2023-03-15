
// Change of input only actives when clicking away (clicking anywhere outside the textbox)
// everytime you type something new in the textbook, that's considered a change and change of input will active

// it's more like whatever you leave in that input and it is different than it was when you entered the input.
// so this is not count as change, just focusing




const input = document.querySelector('input');

input.addEventListener('change', function (e) {
    console.log("sdfsdf")
})




// input event - if you want something to happen everytime the value is different inside of this input, not just when you focus and blur, not just when you leave.



input.addEventListener('input', function (e) {
    console.log("INPUT!")
})


// So whenever the value changes instead of our input, the input event, 
// whenever that happens, we're going to take the value from that input and i'm going to update h1 to display it.
// like a live update

input.addEventListener('change', function (e) {
    h1.innerText = input.value;
})