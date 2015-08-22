angular
    .module('codedInBraam', [
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
