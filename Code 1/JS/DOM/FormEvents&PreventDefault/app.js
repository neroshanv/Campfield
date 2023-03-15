// what happens when we submit a form by default and how we can prevent that behavior.

// start by just adding an event listener for when this form is submitted nice and easy


const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    // stop, don't send another request
    e.preventDefault();
    console.log("SUBMITTED THE FORM");
    // we take value from the input and extract the value
    const catName = input.value;
    // made an empty LI
    const newLI = document.createElement("LI");
    // and added that value into the empty LI
    newLI.innerText = catName;
    // we append that to our UL
    list.append(newLI);
    // reset this form input
    input.value = "";
});

// preventDefault - prevents the default behavior triggered by a given event.
// so it's not specific to a submission of a form.
// there are other events that have their own default behavior