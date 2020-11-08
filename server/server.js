'use strict'
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./dataconfig'),
    helmet = require('helmet');

var homeRoute = require('./routes/index');
var Hostels = require('./routes/Hostels');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useCreateIndex: true,}).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use('/hostels', Hostels);
app.use('/', homeRoute);

const port = process.env.PORT || 8000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});