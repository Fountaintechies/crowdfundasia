// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'medias' controller
angular.module('medias').controller('MediasController', ['$scope', '$stateParams', '$location', 'Authentication', 'Medias',
    function($scope, $stateParams, $location, Authentication, Medias) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        // Create a new controller method for creating new medias
        $scope.create = function() {
        	// Use the form fields to create a new media $resource object
            var media = new Medias({
                title: this.title,
                content: this.content
            });

            // Use the media '$save' method to send an appropriate POST request
            media.$save(function(response) {
            	// If an media was created successfully, redirect the user to the media's page
                $location.path('medias/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of medias
        $scope.find = function() {
        	// Use the media 'query' method to send an appropriate GET request
            $scope.medias = Medias.query();
        };

        // Create a new controller method for retrieving a single media
        $scope.findOne = function() {
        	// Use the media 'get' method to send an appropriate GET request
            $scope.media = Medias.get({
              mediaId: $routeParams.mediaId
            });
        };

  }
]);
