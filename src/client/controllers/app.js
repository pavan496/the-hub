var TheHub;
(function (TheHub) {
    /**
     * Root controller.
     */
    var AppController = (function () {
        function AppController($mdSidenav, $http, $rootScope, $location) {
            var _this = this;
            this.$mdSidenav = $mdSidenav;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.$location = $location;
            /**
             * Handler for button click to show/hide left menu.
             */
            this.openLeftMenu = function () {
                _this.$mdSidenav('left').toggle();
            };
            /**
             * Logout handler
             */
            this.logout = function () {
                _this.$http.get('/logout').then(function (value) {
                    _this.$rootScope.auth = {
                        isAuthenticated: false,
                        isAuthenticationChecked: true,
                        user: null
                    };
                    _this.$location.url('/login');
                }, function (error) {
                    _this.$rootScope.showToast('Something wrong. Unable to log you out!');
                });
            };
        }
        AppController.$inject = ['$mdSidenav', '$http', '$rootScope', '$location'];
        return AppController;
    })();
    TheHub.AppController = AppController;
    angular.module('TheHub').controller('AppController', AppController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=app.js.map