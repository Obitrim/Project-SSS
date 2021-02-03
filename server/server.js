'use strict'
const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    helmet = require('helmet'),
    mongoose = require('mongoose'),
    config = require('./dataconfig'),
    bodyParser = require('body-parser');

var homeRoute = require('./routes/index');
var Hostels = require('./routes/Hostels');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useCreateIndex: true,}).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use('/hostels', Hostels);
app.use('/', homeRoute);

const port = process.env.PORT || 8000;
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});