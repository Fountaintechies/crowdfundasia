// Invoke 'strict' JavaScript mode
'use strict';

angular.module('users').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('signon', {
	url: '/signon',
	templateUrl: 'users/views/signon.client.view.html'
    });
}]);