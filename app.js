const express = require('express');
const app = express();

const trackRoutes = require('./api/routes/tracks');

app.use('/tracks', trackRoutes)

module.exports = app;