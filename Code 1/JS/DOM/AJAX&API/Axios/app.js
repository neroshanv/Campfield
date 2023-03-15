// 294. Intro Axios

// fetch API
// - the newer way of making requests via JS
// - supports promises!
// - not supported in IE


// Axios - a library for making HTTP Requests
// - seperate library that is not native to JS that is made for HTTP requests, for creating requests and working with them and to make it simple as possible
// 



// makes a request and parses the json and adds it on to whatever this response object includes
// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESPONSE", res);
//     })
//     .catch(e => {
//         console.log("ERROR", e);
//     });

// ------------------------------------------------------------------------------------------
// const getStarWarsPerson = async () => {
//     try {
//         const res = await axios.get("https://swapi.dev/api/people/1/");
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR", e);
//     }
// };

// getStarWarsPerson();




// 295. Setting Headers with Axios

// headers - request headers when we send a request

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)

}

const getDadJoke = async () => {
    try {
        // each API doc specifies how to use headers
        // each API is different, have to read doc carefully on how to use headers
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE SORRY"
    }

}

button.addEventListener('click', addNewJoke)