//TODO: change ES5 syntax to ES6

import express from 'express';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

import postsRouter from './routes/postsRouter';
import wallsRouter from './routes/wallsRouter';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) =>
  res.send('hello world')
)

app.use('/posts', postsRouter)
app.use('/walls', wallsRouter)

module.exports = app;
