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
        $routeProvider.when('/edit_account/:id', {
            templateUrl: 'partials/edit_account.html',
            controller: EditAccountController
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
//@ sourceMappingURL=app.js.map
