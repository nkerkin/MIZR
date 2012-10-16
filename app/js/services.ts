///<reference path='lib.d.ts'/>
///<reference path='../../app/lib/angular/angular.js'/>

'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1.0');

// This is a module for cloud persistance in parse - http://parse.com
angular.module('parse', ['ng']).
    factory('Account', function ($rootScope, $q) {

        var Account = Parse.Object.extend("Account");
        var query = new Parse.Query(Account);

        var map = (acc) => {
            var result = acc.attributes;
            result.id = acc.id;
            return result;
        }

        Account.findall = () =>
        {
            var deferred = $q.defer();
            query.find({
                success: results => {
                    $rootScope.$apply(() => {
                        deferred.resolve(_.map(results, map));
                    });
                }
            });
            return deferred.promise;
        };

        Account.load = (id) =>
        {
            var deferred = $q.defer();
            query.get(id, {
                success: account => {
                    $rootScope.$apply(() => {
                        deferred.resolve(account);
                    });
                },
                error: (object, error) => {
                    // The object was not retrieved successfully.
                    // error is a Parse.Error with an error code and description.
                }
            });
            return deferred.promise;
        }

        Account.save = () =>
        {

        }

        return Account;
    });


