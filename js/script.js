var comicsApp = angular.module('comicsApp', ['ui.router']);

comicsApp.config(function($stateProvider, $urlRouterProvider){
		
	$stateProvider
	.state('comics-detail', {
		url: '/:comic',
		views: {
			"container": {
				template: "comics-detail template",
			}
		}
	})
});