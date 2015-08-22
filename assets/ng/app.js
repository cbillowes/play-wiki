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
    });
