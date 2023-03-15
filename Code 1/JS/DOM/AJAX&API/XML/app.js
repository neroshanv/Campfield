
// OLD WAY


// "https://swapi.dev/api/people/1/"


// const req = new XMLHttpRequest();

// // this will run when there is no error
// req.onload = function () {
//     console.log("IT LOADED");
//     console.log(this);
// }

// req.onerror = function () {
//     console.log("ERROR!!!");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();




// NEW WAY
fetch("https://swapi.dev/api/people/1/")
    .then(res => {
        // display the res as in whatever the response is
        console.log("RESOLVED", res)
        // method called json is added on to this fetch response object.
        // json also returns a promise, that's why we use: .then(data => console.log("JSON DONE", data));
        return res.json()
    })
    .then(data => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/");
        return res.json();
    })
    .then(res => {
        console.log("SECOND REQUEST RESOLVED!!")
    })
    .catch(e => {
        console.log("ERROR", e);
    })



// ANOTHER NEW WAY

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json()
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json()
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!", e)
    }
};

loadStarWarsPeople();





