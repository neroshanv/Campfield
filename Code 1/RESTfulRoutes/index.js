const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }))
//json built in middleware function, it parses incoming requests with json
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join('__dirname', 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuidv4(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuidv4(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]


// simple route that renders a form
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

// form submits it data too
app.post('/comment', (req, res) => {
    // we extract it from the body
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

app.get('/comment/:id', (req, res) => {
    const { id } = req.params.id
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})




// Patch/update a comment
app.patch('/comments/:id', (req, res) => {
    // take the id
    const { id } = req.params.id
    // find the comment we have currently
    const foundComment = comments.find(c => c.id === id);
    // we need to update that comment based upon some payload that was sent in the request body
    foundComment.comment = newCommentText;
    res.redirect('/comments')

    res.send('UPDATING SOMETHING!')
})


// make a route to serve the form
app.get('/comment/:id/edit', (req, res) => {
    // id request from params ( need to define id)
    const { id } = req.params;
    const newCommentText = comments.find(c => c.id === id);
    const foundComment = newCommentText;
    // we pass in { comment } so we can have access to that comment 
    res.render('comments/edit', { comment })


})


// DELETE
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // using array method filter
    // filter method takes a callback and should return true or false
    // we also need to update the comments variable to be this new array based upon the old version of comments
    comments = comments.filter(c => c.id !== id)
    // after user deletes comment then redirect to comments page
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})


app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})



app.listen(3000, () => {
    console.log("ON PORT 3000!")
})