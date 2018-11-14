const express = require('express');
const services = require('./services');
const handleListen = require('./handleListen');
const PORT = 3000;
const app = express();

module.exports = app.listen(PORT, handleListen(console.log, PORT));

app.get('/services/list', services)


