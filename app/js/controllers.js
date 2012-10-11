'use strict';
var AngularController = (function () {
    function AngularController() { }
    return AngularController;
})();
var SidebarController = (function () {
    function SidebarController($scope) {
        $scope.Accounts = [
            {
                id: 1,
                name: "westpac",
                account_num: "1235",
                balance: "234.67",
                icon: "icon-music"
            }
        ];
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
        '$scope'
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
