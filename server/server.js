'use strict'
const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    helmet = require('helmet'),
    mongoose = require('mongoose'),
    config = require('./dataconfig'),
    bodyParser = require('body-parser'),
    userModel = require('./models/User.js'),
    hostelModel = require('./models/Hostels.js');

var homeRoute = require('./routes/index');
var Hostels = require('./routes/Hostels');

// Sample test data
const testUsers = require('./test-data/users');
const testHostels = require('./test-data/hostels');
/**
 * inserts intial data into db in the absence of data
 *
 * @param {Object} model - model to use
 * @param {Array} testData - data to insert
 *
 * @return {undefined}
 */
function insertInitalValues(model, testData) {
	model.find({}, (err, data) => {
  		if (err) return console.log(err.message);
  		if (data && data.length === 0){
  			model.insertMany(testData, (err, fetchedData) => {
  				if (err) return console.log(err.message);
  				console.log(fetchedData, 'Initial state inserted successfully');
  			})
  		}
  	});
}

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  	console.log('Database is connected') 
  	insertInitalValues(userModel, testUsers);
  	insertInitalValues(hostelModel, testHostels);
 });
connection.on('error', err => console.log('Can not connect to the database'+ err));

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