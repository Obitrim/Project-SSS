'use strict'
const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    helmet = require('helmet'),
    mongoose = require('mongoose'),
    config = require('./dataconfig'),
    bodyParser = require('body-parser'),
    userModel = require('./models/User.js');

var homeRoute = require('./routes/index');
var Hostels = require('./routes/Hostels');

// Sample test login data 
const testUsers = [
	{
		username: 'oaorison1',
		password: '1234orison',
		refNumber: '30125743',
		firstName: 'Orison',
		lastName: 'Ansre',
		level: 200,
		program: 'Petrochemical Engineering',
		phone: '0544933371',
		email: 'orison@gmail.com',
		knustEmail: 'orison2@gmail.com'
	}, {
		username: 'Zion',
		password: '1z2i3o4n',
		refNumber: '2065817',
		firstName: 'Zion',
		lastName: 'Ignitious',
		level: 300,
		program: 'Natural Resource',
		phone: '0544946371',
		email: 'zion@gmail.com',
		knustEmail: 'zion2@gmail.com'
	},{
		username: 'pkobitrim',
		password: '4odstc34',
		refNumber: '20521730',
		firstName: 'Paul',
		lastName: 'Obitrim',
		level: 400,
		program: 'BSc. Computer Science',
		phone: '0544966371',
		email: 'paulobitrim@gmail.com',
		knustEmail: 'pevangelist516@gmail.com'
	}
];

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  	console.log('Database is connected') 
	userModel.find({}, (err, users) => {
  		if (err) return console.log('Error fetching users');
  		if (users && users.length === 0){
  			userModel.insertMany(testUsers, (err, userDocs) => {
  				if (err) return console.log('Error Inserting users');
  				console.log(userDocs, 'Users inserted successfully');
  			})
  		}
  	})
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