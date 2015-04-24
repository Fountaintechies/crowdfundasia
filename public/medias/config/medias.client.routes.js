// Invoke 'strict' JavaScript mode
'use strict';

//INSERT START
angular.module('medias').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('list-medias', {
	url: '/list-medias',
	templateUrl: 'medias/views/list-medias.client.view.html'
    });
    $stateProvider.state('create-media', {
	url: '/create-media',
	templateUrl: 'medias/views/create-media.client.view.html'
    });
    $stateProvider.state('view-media', {
	url: '/medias/:mediaId',
	templateUrl: 'medias/views/view-media.client.view.html',
	controller: 'MediasController'
    });
}]);
//INSERT END
