const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./src/routes/index');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT_API, () => {
    console.log('Server running!');
});
