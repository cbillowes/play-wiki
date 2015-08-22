angular.module('codedInBraam')
  .controller('WikiNewCtrl', function($scope, $routeParams, WikiService) {
    $scope.newWiki = function(wikiData) {
      WikiService.createWiki(wikiData);
    };
  })
  .controller('WikiShowCtrl', function($scope, $routeParams, WikiService) {
    var id = $routeParams.wikiId.toString();
    $scope.wiki = WikiService.getWiki(id);
  });