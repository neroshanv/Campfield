const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');

app.use('/', shelterRoutes);


/shelters
POST /shelters
/shelters/:id
/shelters/"id/edit




app/AudioListener(3000, () => {
    console.log('Serving app on localhost:3000')
})