// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	footprints = require('../../app/controllers/footprints.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'footprints' base routes 
	app.route('/api/footprints')
	   .get(footprints.list)
	   .post(users.requiresLogin, footprints.create);

	// Set up the 'articles' parameterized routes
	// app.route('/api/articles/:articleId')
	//    .get(articles.read)
	//    .put(users.requiresLogin, articles.hasAuthorization, articles.update)
	//    .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

	// Set up the 'articleId' parameter middleware
	// app.param('articleId', articles.articleByID);
};
