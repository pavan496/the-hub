var TheHub;
(function (TheHub) {
    /**
     * Root controller.
     */
    var AppController = (function () {
        function AppController($mdSidenav) {
            var _this = this;
            this.$mdSidenav = $mdSidenav;
            /**
             * Handler for button click to show/hide left menu.
             */
            this.openLeftMenu = function () {
                _this.$mdSidenav('left').toggle();
            };
        }
        AppController.$inject = ['$mdSidenav'];
        return AppController;
    })();
    TheHub.AppController = AppController;
    angular.module('TheHub').controller('AppController', AppController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=app.js.map