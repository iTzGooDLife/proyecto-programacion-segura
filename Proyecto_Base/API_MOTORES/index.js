const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./src/routes/index');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(process.env.PORT_API, () => {
    console.log('Server running!');
});
