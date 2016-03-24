import {RootScopeExt} from '../../models/client/root.scope';
module TheHub {
    /**
     * Root controller.
     */
    export class AppController {

        static $inject = ['$mdSidenav', '$http', '$rootScope', '$location'];

        constructor(private $mdSidenav: angular.material.ISidenavService, private $http: ng.IHttpService, private $rootScope: RootScopeExt, private $location: ng.ILocationService) {
        }

        /**
         * Handler for button click to show/hide left menu.
         */
        openLeftMenu = () => {
            this.$mdSidenav('left').toggle();
        }

        /**
         * Logout handler
         */
        logout = () => {
            this.$http.get('/logout').then((value: ng.IHttpPromiseCallbackArg<{}>) => {
                
                this.$rootScope.auth = {
                    isAuthenticated: false,
                    isAuthenticationChecked: true,
                    user: null
                };
                
                this.$location.url('/login');
            }, (error: any) => {
                this.$rootScope.showToast('Something wrong. Unable to log you out!');
            });
        }
    }

    angular.module('TheHub').controller('AppController', AppController);
}