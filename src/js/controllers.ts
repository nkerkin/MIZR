///<reference path='lib.d.ts'/>
///<reference path='../../app/lib/angular/angular.js'/>

'use strict';

class AngularController {
    $inject: string[];
}

/* Controllers */
class SidebarController {
    static $inject = ['$scope', 'Account'];
    constructor ($scope, Account) {
        $scope.Accounts = Account.findall();
        //$scope.Accounts =  [{id:1, name:"westpac", account_num:"1235", balance:"234.67", icon:"icon-music"}] ;
        $scope.Goals = [{ id: 1, name: "Car", account_num: "sf", progress: "24" }];
    }
}

class EditAccountController {
    static $inject = ['$scope', '$routeParams', 'Account'];
    constructor ($scope, $routeParams, Account) {
        //var self = this;

        Account.load($routeParams.id).then(account => {
            //self.original = account;
            $scope.account = account;
        });

        $scope.save = () =>
        {
            $scope.account.set($scope.account);
            $scope.account.save();
        };
    }
}



function MyCtrl1() { }
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];