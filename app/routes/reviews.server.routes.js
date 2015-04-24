// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	reviews = require('../../app/controllers/reviews.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'reviews' base routes 
	app.route('/api/reviews')
	   .get(reviews.list)
	   .post(users.requiresLogin, reviews.create);
	
	// Set up the 'reviews' parameterized routes
	app.route('/api/reviews/:reviewId')
	   .get(reviews.read)
	   .put(users.requiresLogin, reviews.hasAuthorization, reviews.update)
	   .delete(users.requiresLogin, reviews.hasAuthorization, reviews.delete);

	// Set up the 'reviewId' parameter middleware   
	app.param('reviewId', reviews.reviewByID);
};