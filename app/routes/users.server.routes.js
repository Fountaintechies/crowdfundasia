// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signup' routes 
	app.route('/api/signup')
	   .post(users.signup);

	// Set up the 'signin' routes 
	app.route('/api/signin')
	   .post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
	   }));

	// Set up the 'signout' route
	app.get('/api/signout', users.signout);

	// adminroute
	app.get('/api/users', users.list);
};