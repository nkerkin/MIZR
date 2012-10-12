'use strict';
Parse.initialize("l8TQTG1TFSGF83hkgZmVH13F4XcaxODTyAIIXAK4", "JAQLekZlAlsvdTFdWhu2BwK9s663IXhF1KUy0NPJ");
angular.module('myApp', [
    'parse', 
    'myApp.filters', 
    'myApp.services', 
    'myApp.directives'
]).config([
    '$routeProvider', 
    function ($routeProvider) {
        $routeProvider.when('/edit_account', {
            templateUrl: 'partials/edit_account.html',
            controller: EditAccount
        });
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: MyCtrl1
        });
        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: MyCtrl2
        });
        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
angular.module('parse', [
    'ng'
]).factory('Account', function ($rootScope, $q) {
    var Account = Parse.Object.extend("Account");
    var query = new Parse.Query(Account);
    Account.findall = function () {
        var deferred = $q.defer();
        query.find({
            success: function (results) {
                $rootScope.$apply(function () {
                    deferred.resolve(results);
                });
            }
        });
        return deferred.promise;
    };
    return Account;
});
//@ sourceMappingURL=app.js.map
