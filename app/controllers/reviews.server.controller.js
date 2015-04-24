// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Review = mongoose.model('Review');

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

// Create a new controller method that creates new reviews
exports.create = function(req, res) {
	// Create a new review object
	var review = new Review(req.body);

	// Set the review's 'creator' property
	review.creator = req.user;

	// Try saving the review
	review.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the review 
			res.json(review);
		}
	});
};

// Create a new controller method that retrieves a list of reviews
exports.list = function(req, res) {
	// Use the model 'find' method to get a list of reviews
	Review.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, reviews) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the review 
			res.json(reviews);
		}
	});
};

// Create a new controller method that returns an existing review
exports.read = function(req, res) {
	res.json(req.review);
};

// Create a new controller method that updates an existing review
exports.update = function(req, res) {
	// Get the review from the 'request' object
	var review = req.review;

	// Update the review fields
	review.title = req.body.title;
	review.content = req.body.content;

	// Try saving the updated review
	review.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the review 
			res.json(review);
		}
	});
};

// Create a new controller method that delete an existing review
exports.delete = function(req, res) {
	// Get the review from the 'request' object
	var review = req.review;

	// Use the model 'remove' method to delete the review
	review.remove(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the review 
			res.json(review);
		}
	});
};

// Create a new controller middleware that retrieves a single existing review
exports.reviewByID = function(req, res, next, id) {
	// Use the model 'findById' method to find a single review 
	Review.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, review) {
		if (err) return next(err);
		if (!review) return next(new Error('Failed to load review ' + id));

		// If an review is found use the 'request' object to pass it to the next middleware
		req.review = review;

		// Call the next middleware
		next();
	});
};

// Create a new controller middleware that is used to authorize an review operation 
exports.hasAuthorization = function(req, res, next) {
	// If the current user is not the creator of the review send the appropriate error message
	if (req.review.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}

	// Call the next middleware
	next();
};