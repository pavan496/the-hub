var TheHub;
(function (TheHub) {
    /**
     * Home page controller.
     */
    var DirectoryController = (function () {
        function DirectoryController($http, $mdSidenav) {
            var _this = this;
            this.$http = $http;
            this.$mdSidenav = $mdSidenav;
            this.employees = new Array();
            this.searchQuery = '';
            this.loadEmployees = function () {
                _this.$http.get('/secure/employees?q=' + _this.searchQuery).then(function (response) {
                    _this.employees = response.data;
                    console.log(response.data);
                }, function (error) {
                });
            };
            this.showEmployee = function (employee) {
                _this.selectedEmployee = employee;
                _this.$mdSidenav('right').toggle();
            };
            this.loadEmployees();
        }
        DirectoryController.$inject = ['$http', '$mdSidenav'];
        return DirectoryController;
    })();
    TheHub.DirectoryController = DirectoryController;
    angular.module('TheHub').controller('DirectoryController', DirectoryController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=directory.js.map