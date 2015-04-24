// Invoke 'strict' JavaScript mode
'use strict';

angular.module('reviews').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('list-reviews', {
	url: '/list-reviews',
	templateUrl: 'reviews/views/list-reviews.client.view.html'
    });
    $stateProvider.state('create-review', {
	url: '/create-review',
	templateUrl: 'reviews/views/create-review.client.view.html'
    });
    $stateProvider.state('view-review', {
	url: '/reviews/:articleId',
	templateUrl: 'reviews/views/view-review.client.view.html'
    });
    $stateProvider.state('edit-review', {
	url: '/reviews/:articleId/edit',
	templateUrl: 'reviews/views/edit-review.client.view.html'
    });
}]);