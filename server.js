const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

//body parser middle ware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected..'))
    .catch(err=> console.log(err));

    // Use Routes
    app.use('/api/items', items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started us port ${port}`));