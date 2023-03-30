const express = require('express');
const router = express.Router();

router.get('/shelters', (req, res) = => {
    res.send("ALL SHELTERS")
})

router.post('shelters/:id', (req, res) => {
    res.send("CREATING SHELTERS ")
})

router.get('shelters/:id', (req, res) => {
    res.send("VIEWING ONE SHELTER")
})

router.get('shelters/:id', (req, res) => {
    res.send("EDITING ONE SHELTER")
})

module.exports = router;