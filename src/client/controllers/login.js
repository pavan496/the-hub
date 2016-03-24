var TheHub;
(function (TheHub) {
    /**
     * Login page controller.
     */
    var LoginController = (function () {
        function LoginController($http, $rootScope, $location) {
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.$location = $location;
            this.loginBtnEnabled = true;
        }
        /**
         * Method to check if the user is logged in
         */
        LoginController.prototype.login = function (user) {
            var _this = this;
            this.loginBtnEnabled = false;
            this.$http.post('/login', user).then(function (value) {
                _this.$rootScope.auth = { isAuthenticated: true, isAuthenticationChecked: true };
                _this.$location.url('/');
            }, function (error) {
                _this.$rootScope.auth = { isAuthenticated: false, isAuthenticationChecked: true };
                _this.$rootScope.showToast('Invalid Username/Password combination!');
                _this.loginBtnEnabled = true;
            });
        };
        LoginController.$inject = ['$http', '$rootScope', '$location'];
        return LoginController;
    })();
    TheHub.LoginController = LoginController;
    angular.module('TheHub').controller('LoginController', LoginController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=login.js.map