var TheHub;
(function (TheHub) {
    /**
     * Home page controller.
     */
    var DirectoryController = (function () {
        function DirectoryController($http) {
            var _this = this;
            this.$http = $http;
            this.employees = new Array();
            this.loadEmployees = function () {
                _this.$http.get('/secure/employees').then(function (response) {
                    _this.employees = response.data;
                    console.log(response.data);
                }, function (error) {
                });
            };
            this.showEmployee = function (employee) {
                _this.selectedEmployee = employee;
            };
            this.loadEmployees();
        }
        DirectoryController.$inject = ['$http'];
        return DirectoryController;
    })();
    TheHub.DirectoryController = DirectoryController;
    angular.module('TheHub').controller('DirectoryController', DirectoryController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=directory.js.map