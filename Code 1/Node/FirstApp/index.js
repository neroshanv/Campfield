// Goal is to get a server up and running





// we need to require express in order to use it
const express = require("express");
// execute and save to variable called app
const app = express()



// Goal: is to have incoming request, get an outgoing response.
// anytime we have an incoming request, this callback will run.

// we have to access 2 different paramenteres in this function
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     // res.send is going to send and generate an HTTP response
//     res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE")
// });

app.get('/', (req, res) => {
    res.send('THIS IS MY HOME PAGE')
})

// we use : to designate something as a variable or path variable
app.get('/r/:subreddit', (req, res) => {
    res.send("THIS IS A SUBREDDIT!")
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof')
})

// always leave this last, any request that is an error, * will send this response
app.get('*', (req, res) => {
    res.send(`i don't know that path!`)
})


// /cats => 'meow'
// /dogs => 'woof'
// '/'


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})