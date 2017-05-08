'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

// make a secrets file and gitignore it!
if (process.env.NODE_ENV === 'development') require('../secrets');

// Logging middleware (non-production only)
if (process.env.NODE_ENV !== 'production') app.use(require('volleyball'));

app.use(require('volleyball'))
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api', require('./api'))
  .use((req, res, next) =>
    path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next())
  .use('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'public/index.html')))
  .use((err, req, res, next) =>
    res.status(err.status || 500).send(err.message || 'Internal server error.'));
  
const listenUp = () =>
  app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`));

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  db.sync()
    .then(listenUp);
}
