'use strict';
var AngularController = (function () {
    function AngularController() { }
    return AngularController;
})();
var SidebarController = (function () {
    function SidebarController($scope, Account) {
        $scope.Accounts = Account.findall();
        $scope.Goals = [
            {
                id: 1,
                name: "Car",
                account_num: "sf",
                progress: "24"
            }
        ];
    }
    SidebarController.$inject = [
        '$scope', 
        'Account'
    ];
    return SidebarController;
})();
function EditAccount() {
}
EditAccount.$inject = [];
function MyCtrl1() {
}
MyCtrl1.$inject = [];
function MyCtrl2() {
}
MyCtrl2.$inject = [];
//@ sourceMappingURL=controllers.js.map
