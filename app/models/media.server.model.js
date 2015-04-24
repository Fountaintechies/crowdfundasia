// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'MediaSchema'
var MediaSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	path: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		default: ''
	}
});

// Create the 'Media' model out of the 'MediaSchema'
mongoose.model('Media', MediaSchema);
