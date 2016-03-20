
"use strict";

module TheHub {
    //Declaring the parent module
    angular.module('TheHub', ['ngRoute', 'ngMaterial']);

    /**
     * Run method to initialize any settings required
     */
    function run($rootScope: ng.IRootScopeService, $location: ng.ILocationService) {
        $rootScope.$on("$routeChangeError", () => {
            console.log("Route Change Error");
            $location.url('/login?redirect=' + $location.url());
        });
    }

    run.$inject = ['$rootScope', '$location'];

    //Invoking run
    angular.module('TheHub').run(run);
}