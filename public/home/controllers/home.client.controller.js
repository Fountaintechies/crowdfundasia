// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'home' controller
angular.module('home').controller('HomeController', ['$scope','$state', 'Authentication',
	function($scope, $state, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
		$state.transitionTo('home.signon');
	}
]);
