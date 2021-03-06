(function () {

  var phonecatApp = angular.module('phonecatApp',[
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
  ]);

  phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
      // body...
      $routeProvider.
        when('/phones',{
          templateUrl: 'partials/phone-list.html',
          controller: 'PhoneListCtrl',
          controllerAs: 'phoneli'
        }).
        when('/phones/:phoneId',{
          templateUrl: 'partials/phone-detail.html',
          controller: 'PhoneDetailCtrl',
          controllerAs: 'phonedet'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }]);
})();
