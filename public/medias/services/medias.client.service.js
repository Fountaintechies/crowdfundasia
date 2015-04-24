// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'medias' service
angular.module('medias').factory('Medias', ['$resource', function($resource) {
	// Use the '$resource' service to return an media '$resource' object
    return $resource('api/medias/:mediaId', {
        mediaId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
