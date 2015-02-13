var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	//$urlRouterProvider.otherwise('/404');
	$urlRouterProvider.otherwise('/gw');

	$stateProvider
	.state('comics-list', {
		url: '/:series',
		views: {
			"container": {
				templateUrl: "This is the comic-list container",
			}
		}
	})
});