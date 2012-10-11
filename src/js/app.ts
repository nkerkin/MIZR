///<reference path='lib.d.ts'/>
///<reference path='../../app/lib/angular/angular.js'/>
/// reference path='services.ts'/>
///reference path='controllers.ts'/>
///reference path='filters.ts'/>
///reference path='directives.ts'/>


'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/edit_account', {templateUrl: 'partials/edit_account.html', controller: EditAccount});
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({ redirectTo: '/view1' });
    
  }]);
