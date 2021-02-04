'use strict';
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	level: {
		type: Number,
		required: true
	},
	program: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	refNumber: {
		type: String,
		length: 8,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	email: {
		type: String,
		validate: {
			validator: value => /[a-zA-Z0-9.]{4,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/i.test(value),
			message: props => `${props.email} doe'st match the correct format`
		}
	},
	knustEmail: {
		type: String,
		validate: {
			validator: value => /[a-zA-Z0-9.]{4,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/i.test(value),
			message: props => `${props.knustEmail} does't match the correct format`
		}
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', usersSchema);