import {RootScopeExt} from '../models/client/root.scope'
"use strict";

module TheHub {
    //Declaring the parent module
    angular.module('TheHub', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

    /**
     * Run method to initialize any settings required
     */
    function run($rootScope: RootScopeExt, $location: ng.ILocationService, $mdToast: angular.material.IToastService) {

        let toastPosition = { top: false, right: true, bottom: true, left: false };

        /**
         * Handler for route change errors. 
         * Route change errors are triggered when the resolve promise in route configuration gets rejected.
         */
        $rootScope.$on('$routeChangeError', () => {
            $location.url('/login?continue=' + $location.url());
        });

        /** 
         * Handler for route change successes.
         * The title of the web page would be changed based on the title provided during route
         */
        $rootScope.$on('$routeChangeSuccess', (event: any, current: any) => {
            $rootScope.common = { title: current.$$route.title };
        });

        let getToastPosition = (): string => {
            return Object.keys(toastPosition)
                .filter(function(pos) { return toastPosition[pos]; })
                .join(' ');
        }

        $rootScope.showToast = (message: string) => {
            let simpleToast: angular.material.ISimpleToastPreset = $mdToast.simple().textContent(message).position(getToastPosition());
            $mdToast.show(simpleToast);
        }
    }

    run.$inject = ['$rootScope', '$location', '$mdToast'];

    //Invoking run
    angular.module('TheHub').run(run);
}