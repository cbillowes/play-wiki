angular.module('playWiki')
  .controller('NewWikiController', function($scope, $routeParams, WikiService) {
    $scope.newWiki = function(wikiData) {
      WikiService.createWiki(wikiData);
    };
  })
  .controller('ShowWikiController', function($scope, $routeParams, WikiService) {
    var id = $routeParams.wikiId.toString();
    $scope.wiki = WikiService.getWiki(id);
  });
