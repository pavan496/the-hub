var TheHub;
(function (TheHub) {
    /**
     * Login page controller.
     */
    var LoginController = (function () {
        function LoginController($http, $rootScope, $location, $routeParams) {
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.loginBtnEnabled = true;
        }
        /**
         * Method to check if the user is logged in
         */
        LoginController.prototype.login = function (user) {
            var _this = this;
            this.loginBtnEnabled = false;
            this.$http.post('/login', user).then(function (value) {
                _this.$rootScope.auth = {
                    isAuthenticated: true,
                    isAuthenticationChecked: true,
                    user: value.data
                };
                _this.$location.url(_this.$routeParams.continue ? _this.$routeParams.continue : '/');
            }, function (error) {
                _this.$rootScope.auth = {
                    isAuthenticated: false,
                    isAuthenticationChecked: true,
                    user: null
                };
                _this.$rootScope.showToast('Invalid Username/Password combination!');
                _this.loginBtnEnabled = true;
            });
        };
        LoginController.$inject = ['$http', '$rootScope', '$location', '$routeParams'];
        return LoginController;
    })();
    TheHub.LoginController = LoginController;
    angular.module('TheHub').controller('LoginController', LoginController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=login.js.map