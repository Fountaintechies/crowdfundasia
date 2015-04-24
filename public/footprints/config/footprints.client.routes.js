// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'footprints' module routes
// angular.module('footprints').config(['$routeProvider',
// 	function($routeProvider) {
// 		$routeProvider.
// 		when('/footprints', {
// 			templateUrl: 'footprints/views/list-footprints.client.view.html'
// 		}).
// 		when('/footprints/create', {
// 			templateUrl: 'footprints/views/create-footprint.client.view.html'
// 		});
// 	}
// ]);

//INSERT START
angular.module('footprints').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('create-footprint', {
    url: '/create-footprint',
    templateUrl: 'footprints/views/create-footprint.client.view.html'
    });
    $stateProvider.state('list-footprints', {
    url: '/list-footprints',
    templateUrl: 'footprints/views/list-footprints.client.view.html'
    });
    $stateProvider.state('map-footprint', {
    url: '/map-footprint',
    templateUrl: 'footprints/views/map-footprint.client.view.html'
    });
}]);


//INSERT END
