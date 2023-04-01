const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
// secret answer
app.use(cookieParser('ThisIsASecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`hey there, ${name}`)
})

// set up a cookie and going to send cookie from a different route
app.get('/setname', (req, res) => {
    res.cookie('name', 'Stevie chicks')
    res.send('OK SENT YOU A COOKIE')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK SIGNED YOUR FRUIT COOKIE!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})


app.listen(3000, () => {
    console.log('SERVING!')
})
