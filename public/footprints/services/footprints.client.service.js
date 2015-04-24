// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'footprints' service
angular.module('footprints').factory('Footprints', ['$resource', function($resource) {
	// Use the '$resource' service to return an footprint '$resource' object
    return $resource('api/footprints/:footprintId', {
        footprintId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);