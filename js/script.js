var comicsApp = angular.module('comicsApp', ['ui.router']);

comicsApp.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('comics-list', {
		url: '/',
		views: {
			"container": {
				template: "This is the comic-list container",
			}
		}
	})
});