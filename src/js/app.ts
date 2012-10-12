///<reference path='lib.d.ts'/>
///<reference path='../../app/lib/angular/angular.js'/>



'use strict';


Parse.initialize("l8TQTG1TFSGF83hkgZmVH13F4XcaxODTyAIIXAK4", "JAQLekZlAlsvdTFdWhu2BwK9s663IXhF1KUy0NPJ");


// Declare app level module which depends on filters, and services
angular.module('myApp', ['parse', 'myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', $routeProvider => {
      $routeProvider.when('/edit_account', { templateUrl: 'partials/edit_account.html', controller: EditAccount });
      $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: MyCtrl1 });
      $routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: MyCtrl2 });
      $routeProvider.otherwise({ redirectTo: '/view1' });

  }]);



// This is a module for cloud persistance in parse - http://parse.com
angular.module('parse', []).
    factory('Account', function () {

        var Account = Parse.Object.extend("Account");
        var query = new Parse.Query(Account);
        Account.findall = (cb) =>
        {
            query.find({
                success: results => {
                    cb(results);
                }
            });
        }

        return Account;
    });

