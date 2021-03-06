// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'users' controller
angular.module('users').controller('UsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users',
    function($scope, $stateParams, $location, Authentication, Users) {
        // Expose the Authentication service
        $scope.authentication = Authentication;


        // Create a new controller method for creating new users
        $scope.signup = function() {
            // Use the form fields to create a new user $resource object
            var user = new Users.signup({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                username: this.username,
                password: this.password,
            });
            // Use the user '$save' method to send an appropriate POST request
            user.$save(function(response) {
                // If an user was created successfully, redirect the user to the user's page 
                $location.path('users/' + response._id);
            }, function(errorResponse) {
                // Otherwise, present the user with the error message
                $scope.errorSignup = errorResponse.data.message;
            });
        };

        // Create a new controller method for signing in
        $scope.signin = function() {
            // Use the form fields to create a new user $resource object
            var user = new Users.signin({
                username: this.username,
                password: this.password
            });
            // Use the user '$save' method to send an appropriate POST request
            user.$save(function(response) {
                // If an user was created successfully, redirect the user to the user's page 
                $location.path('users/' + response._id);
            }, function(errorResponse) {
                // Otherwise, present the user with the error message
                $scope.errorSignin = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a single user
        $scope.signout = function() {
            // Use the user 'get' method to send an appropriate GET request
            Users.signout.get();
        };

        // Create a new controller method for retrieving a list of users
        $scope.find = function() {
            // Use the user 'query' method to send an appropriate GET request
            $scope.users = Users.query();
        };

        // Create a new controller method for retrieving a single user
        $scope.findOne = function() {
            // Use the user 'get' method to send an appropriate GET request
            $scope.user = Users.get({
                userId: $stateParams.userId
            });
        };

        // Create a new controller method for updating a single user
        $scope.update = function() {
            // Use the user '$update' method to send an appropriate PUT request
            $scope.user.$update(function() {
                // If an user was updated successfully, redirect the user to the user's page 
                $location.path('users/' + $scope.user._id);
            }, function(errorResponse) {
                // Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single user
        $scope.delete = function(user) {
            // If an user was sent to the method, delete it
            if (user) {
                // Use the user '$remove' method to delete the user
                user.$remove(function() {
                    // Remove the user from the users list
                    for (var i in $scope.users) {
                        if ($scope.users[i] === user) {
                            $scope.users.splice(i, 1);
                        }
                    }
                });
            } else {
                // Otherwise, use the user '$remove' method to delete the user
                $scope.user.$remove(function() {
                    $location.path('users');
                });
            }
        };
    }
]);