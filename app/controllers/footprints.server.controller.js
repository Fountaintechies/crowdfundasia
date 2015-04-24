// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Footprint = mongoose.model('Footprint');

// Create a new error handling controller method
var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

// Create a new controller method that creates new footprints
exports.create = function(req, res) {
	// Create a new footprint object
	var footprint = new Footprint(req.body);

	// Set the footprint's 'creator' property
	footprint.creator = req.user;

	// Try saving the footprint
	footprint.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the footprint 
			res.json(footprint);
		}
	});
};

// Create a new controller method that retrieves a list of footprints
exports.list = function(req, res) {
	// Use the model 'find' method to get a list of footprints
	Footprint.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, footprints) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the footprint 
			res.json(footprints);
		}
	});
};

// Create a new controller method that returns an existing footprint
exports.read = function(req, res) {
	res.json(req.footprint);
};