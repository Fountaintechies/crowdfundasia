// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'reviews' service
angular.module('reviews').factory('Reviews', ['$resource', function($resource) {
	// Use the '$resource' service to return an review '$resource' object
    return $resource('api/reviews/:reviewId', {
        reviewId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);