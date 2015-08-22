
angular.module('playWiki').config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'HomeController',
      templateUrl: "/assets/ng/templates/index.html"
    })
    .when('/new', {
      controller: 'NewWikiController',
      templateUrl: "/assets/ng/templates/wiki-new.html"
    })
    .when('/wiki/:wikiId', {
      controller: 'ShowWikiController',
      templateUrl: '/assets/ng/templates/wiki-show.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
