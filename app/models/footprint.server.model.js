// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'FootprintSchema'
var FootprintSchema = new Schema({
	longitude: {
		type: Number,
		default: '',
		required: 'Longitude value is required'
	},
	latitude: {
	type: Number,
	default: '',
	required: 'Latitude value is required'
	},
	category: {
	type: String,
	default: '',
	trim: true,
	required: 'Category value is required'
	},
	address: {
		type: String,
		default: '',
		trim: true,
		required: 'Address value is required'
	},
	created: {
		type: Date,
		default: Date.now
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// Create the 'Footprint' model out of the 'FootprintSchema'
mongoose.model('Footprint', FootprintSchema);