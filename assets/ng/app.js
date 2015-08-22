angular
    .module('playWiki', [
        'ngResource',
        'ngRoute',
        'ngAria',
        'ngMaterial',
        'ngMdIcons',
        'firebase'
    ])
    .constant('fb', {
      url: 'https://gorebit.firebaseio.com/'
    })
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('light-green');
    });
