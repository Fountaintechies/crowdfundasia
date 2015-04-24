// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Media = mongoose.model('Media');

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

// Create a new controller method that creates new medias
exports.create = function(req, res) {
	// Create a new media object
	var media = new Media(req.body);

	// Set the media's 'creator' property
  media.creator = req.user;

	// Try saving the media
  media.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the media
			res.json(media);
		}
	});
};

// Create a new controller method that retrieves a list of medias
exports.list = function(req, res) {
	// Use the model 'find' method to get a list of medias
	Media.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, medias) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the media 
			res.json(medias);
		}
	});
};
