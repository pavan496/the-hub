var TheHub;
(function (TheHub) {
    var UserService = (function () {
        function UserService($http) {
            this.$http = $http;
        }
        UserService.prototype.getDetails = function () {
            return { 'username': 'pavan' };
        };
        UserService.$inject = ['$http'];
        return UserService;
    })();
    angular.module('TheHub').service('UserService', UserService);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=user.js.map