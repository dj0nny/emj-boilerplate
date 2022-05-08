const express = require('express');
const morgan = require('morgan');

const app = express();

const api = require('./routes');
const errorHandler = require('./middleware/error.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));

app.use('/api', api);
app.use(errorHandler);

module.exports = app;
