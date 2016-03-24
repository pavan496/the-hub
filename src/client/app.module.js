"use strict";
var TheHub;
(function (TheHub) {
    //Declaring the parent module
    angular.module('TheHub', ['ngRoute', 'ngMaterial', 'ngMessages']);
    /**
     * Run method to initialize any settings required
     */
    function run($rootScope, $location, $mdToast) {
        var toastPosition = { top: false, right: true, bottom: true, left: false };
        /**
         * Handler for route change errors.
         * Route change errors are triggered when the resolve promise in route configuration gets rejected.
         */
        $rootScope.$on("$routeChangeError", function () {
            $location.url('/login?redirect=' + $location.url());
        });
        var getToastPosition = function () {
            return Object.keys(toastPosition)
                .filter(function (pos) { return toastPosition[pos]; })
                .join(' ');
        };
        $rootScope.showToast = function (message) {
            var simpleToast = $mdToast.simple().textContent(message).position(getToastPosition());
            $mdToast.show(simpleToast);
        };
    }
    run.$inject = ['$rootScope', '$location', '$mdToast'];
    //Invoking run
    angular.module('TheHub').run(run);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=app.module.js.map