"use strict";
var TheHub;
(function (TheHub) {
    //Declaring the parent module
    angular.module('TheHub', ['ngRoute', 'ngMaterial']);
    /**
     * Run method to initialize any settings required
     */
    function run($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function () {
            console.log("Route Change Error");
            $location.url('/login?redirect=' + $location.url());
        });
    }
    run.$inject = ['$rootScope', '$location'];
    //Invoking run
    angular.module('TheHub').run(run);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=app.module.js.map