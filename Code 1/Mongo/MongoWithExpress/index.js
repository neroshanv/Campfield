const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


// require model here
const Product = require('./models/product');
const Farm = require('./models/farm')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(err => {
        console.log('UH OH MONGO ERROR!!!')
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// FARM ROUTES
// where we redirect too
app.get('./farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})


app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})
app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms')
})

app.get('farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm })
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.product.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`)
})


// PRODUCT ROUTES
const categories = ['fruit', 'vegetable', 'dairy'];

//basic route app
app.get('/products', async (req, res) => {
    // querying my product model
    // {} - find everything in that model
    const products = await Product.find({})
    console.log(products)
    // This is connected to product.ejs
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})


// setup the route where the submitting to ( from new.ejs)
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})


// in order to use a name in the URL or something looks sort of readable but also unique
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');
    console.log(product);
    res.render('products/show', { product })
})

// request route that will serve the edit form
app.get('/products/:id/edit', async (req, res) => {
    const product = await Product.findById(id)
    res.render('products/edit', { product, categories })
})

// end-point to submit to
// put request is overriding or replacing an object
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    // we redirect so user can't send the request over and over
    res.redirect(`/products/${product._id}`);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})