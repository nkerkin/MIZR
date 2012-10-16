'use strict';
angular.module('myApp.services', []).value('version', '0.1.0');
angular.module('parse', [
    'ng'
]).factory('Account', function ($rootScope, $q) {
    var Account = Parse.Object.extend("Account");
    var query = new Parse.Query(Account);
    var map = function (acc) {
        var result = acc.attributes;
        result.id = acc.id;
        return result;
    };
    Account.findall = function () {
        var deferred = $q.defer();
        query.find({
            success: function (results) {
                $rootScope.$apply(function () {
                    deferred.resolve(_.map(results, map));
                });
            }
        });
        return deferred.promise;
    };
    Account.load = function (id) {
        var deferred = $q.defer();
        query.get(id, {
            success: function (account) {
                $rootScope.$apply(function () {
                    deferred.resolve(account);
                });
            },
            error: function (object, error) {
            }
        });
        return deferred.promise;
    };
    Account.save = function () {
    };
    return Account;
});
//@ sourceMappingURL=services.js.map
