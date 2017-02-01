const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// const router = require('./routes.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, PATCH");
//   next();
// });
// app.use('/api', router);

module.exports = app;
