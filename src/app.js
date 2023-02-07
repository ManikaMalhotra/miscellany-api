//loaders
require('dotenv').config()
require('./loaders/mongoose');

const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./api');
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use('/', api);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});