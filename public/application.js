// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'mean';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'ui.router', 'users', 'home', 'articles', 'footprints','uiGmapgoogle-maps','ngAutocomplete']);

mainApplicationModule.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home/views/home.client.view.html'
    })
    .state('home.signon', {
    	parent: 'home',
        templateUrl: 'users/views/signon.client.view.html'
    });
}]);

// // Configure the hashbang URLs using the $locationProvider services 
// mainApplicationModule.config(['$locationProvider',
// 	function($locationProvider) {
// 		$locationProvider.hashPrefix('!');
// 	}
// ]);

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});