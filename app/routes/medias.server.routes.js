// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	medias = require('../../app/controllers/medias.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'medias' base routes
	app.route('/api/medias')
	   .get(medias.list)
	   .post(users.requiresLogin, medias.create);

};
