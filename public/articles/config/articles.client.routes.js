// Invoke 'strict' JavaScript mode
'use strict';

angular.module('articles').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('list-articles', {
	url: '/list-articles',
	templateUrl: 'articles/views/list-articles.client.view.html'
    });
    $stateProvider.state('create-article', {
	url: '/create-article',
	templateUrl: 'articles/views/create-article.client.view.html'
    });
    $stateProvider.state('view-article', {
	url: '/articles/:articleId',
	templateUrl: 'articles/views/view-article.client.view.html'
    });
    $stateProvider.state('edit-article', {
	url: '/articles/:articleId/edit',
	templateUrl: 'articles/views/edit-article.client.view.html'
    });
}]);