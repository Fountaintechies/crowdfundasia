// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'reviews' controller
angular.module('reviews').controller('ReviewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Reviews',
    function($scope, $stateParams, $location, Authentication, Reviews) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        // Create a new controller method for creating new reviews
        $scope.create = function() {
        	// Use the form fields to create a new review $resource object
            var review = new Reviews({
                title: this.title,
                content: this.content
            });

            // Use the review '$save' method to send an appropriate POST request
            review.$save(function(response) {
            	// If an review was created successfully, redirect the user to the review's page 
                $location.path('reviews/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of reviews
        $scope.find = function() {
        	// Use the review 'query' method to send an appropriate GET request
            $scope.reviews = Reviews.query();
        };

        // Create a new controller method for retrieving a single review
        $scope.findOne = function() {
        	// Use the review 'get' method to send an appropriate GET request
            $scope.review = Reviews.get({
                reviewId: $stateParams.reviewId
            });
        };

        // Create a new controller method for updating a single review
        $scope.update = function() {
        	// Use the review '$update' method to send an appropriate PUT request
            $scope.review.$update(function() {
            	// If an review was updated successfully, redirect the user to the review's page 
                $location.path('review/' + $scope.review._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single review
        $scope.delete = function(review) {
        	// If an review was sent to the method, delete it
            if (review) {
            	// Use the review '$remove' method to delete the review
                review.$remove(function() {
                	// Remove the review from the review list
                    for (var i in $scope.review) {
                        if ($scope.review[i] === review) {
                            $scope.review.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the review '$remove' method to delete the review
                $scope.review.$remove(function() {
                    $location.path('review');
                });
            }
        };
    }
]);