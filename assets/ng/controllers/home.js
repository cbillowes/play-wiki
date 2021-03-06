angular.module('playWiki').controller('HomeController', function(WikiService, $scope, $location, $mdSidenav) {
	$scope.title = 'Welcome to Coded In Braam';
	$scope.description = 'Let\'s do something awesome with Angular and Firebase!';
	$scope.wikis = WikiService.getAllWikis();

	$scope.navigateTo = function(destinationPath) {
  	$scope.toggleSidenav();
  	$location.path(destinationPath);
  };

  $scope.toggleSidenav = function() {
  	$mdSidenav("left").toggle();
  };
});
