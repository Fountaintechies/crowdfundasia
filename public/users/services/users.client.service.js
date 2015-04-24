// Invoke 'strict' JavaScript mode
// 'use strict';

// Create the 'users' service
angular.module('users').factory('Users', ['$resource', function($resource) {
    // Use the '$resource' service to return an user '$resource' object
    return {
    	signup: $resource('api/signup', {},{}),
    	signin: $resource('api/signin', {},{}),
    	signout: $resource('api/signout', {},{})
    };
}]);