const express = require('express');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'mustache');

app.listen(port);
