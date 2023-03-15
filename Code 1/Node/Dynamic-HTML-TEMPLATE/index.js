const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json');

// serving static assets
//                              setting absolute path
app.use(express.static('public'(path.join(__dirname, '/views'))))


// app.set accepts 2 arguements the key and the coresponding value or the property and it's value

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocket', 'monty', 'stephanie', 'winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    //                    second argument will be an object key value pairs and whatever i pass here
    //                    num will be available in my template under the name: rand
    res.render('random', { rand: num })
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})