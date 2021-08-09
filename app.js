/* depencies imports */
const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const errorHandler = require('./controllers/errorController');

/*  files imports     */


const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(compression());

//Routes


app.use(errorHandler);

module.exports = app;