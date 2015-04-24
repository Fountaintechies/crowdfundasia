// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'footprints' controller
angular.module('footprints').controller('FootprintsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Footprints',
    function($scope, $routeParams, $location, Authentication, Footprints) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8,
            
        };

      

        // Create a new controller method for creating new Footprints
        $scope.create = function() {
        	// Use the form fields to create a new footprint $resource object
            var footprint = new Footprints({
                longitude: this.longitude,
                latitude: this.latitude,
                category: this.category,
                address: this.address
            });

            // Use the footprint '$save' method to send an appropriate POST request
            footprint.$save(function(response) {
            	// If a footprint was created successfully, redirect the user to the footprint's page
                $location.path('footprints/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of footprints
        $scope.find = function() {
        	// Use the footprint 'query' method to send an appropriate GET request
            $scope.footprints = Footprints.query();
        };

        // Create a new controller method for retrieving a single footprint
        $scope.findOne = function() {
        	// Use the footprint 'get' method to send an appropriate GET request
            $scope.footprint = Footprints.get({
                footprintId: $routeParams.footprintId
            });
        };
    }
]);
