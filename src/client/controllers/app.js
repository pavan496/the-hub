"use strict";
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
            this.menu = new Array();
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
            this.navigateTo = function (url) {
                if (url == '/logout') {
                    _this.logout();
                }
                else {
                    _this.$location.url(url);
                }
                if (!_this.$mdSidenav('left').isLockedOpen()) {
                    _this.$mdSidenav('left').close();
                }
            };
            this.isItemActive = function (url) {
                if (_this.$location.url() == url) {
                    return 'active';
                }
                else {
                    return '';
                }
            };
            var directoryMenu = { label: 'Employee Directory', menuItems: [{ title: 'View Directory', icon: 'storage', url: '/directory' }] };
            var accountMenu = { label: 'My Account', menuItems: [{ title: 'My Profile', icon: 'account_circle', url: '/profile' }, { title: 'Logout', icon: 'settings_power', url: '/logout' }] };
            this.menu.push(directoryMenu);
            this.menu.push(accountMenu);
        }
        AppController.$inject = ['$mdSidenav', '$http', '$rootScope', '$location'];
        return AppController;
    }());
    TheHub.AppController = AppController;
    angular.module('TheHub').controller('AppController', AppController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=app.js.map