var labels = angular.module('labels', ['pascalprecht.translate']);
labels.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en_US', {
    'TITLE': 'Hello',
    'FOO': 'This is a paragraph'
  });
 
 $translateProvider.useUrlLoader('http://localhost:8080/cm/de_De.json', {
  queryParameter : 'TITLE'
});
 
 $translateProvider.useUrlLoader('http://localhost:8080/cm/de_De.json');
  $translateProvider.preferredLanguage('en_US').fallbackLanguage('en_US');
}]);