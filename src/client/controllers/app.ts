import {RootScopeExt} from '../../models/client/root.scope';

module TheHub {
    /**
     * Root controller.
     */
    export class AppController {

        static $inject = ['$mdSidenav', '$http', '$rootScope', '$location'];

        menuItems: Array<{}> = new Array();

        constructor(private $mdSidenav: angular.material.ISidenavService, private $http: ng.IHttpService, private $rootScope: RootScopeExt, private $location: ng.ILocationService) {
            this.menuItems.push({ displayName: 'Employee Directory', url: '/directory' });
            this.menuItems.push({ displayName: 'Blog', url: '/blog' });

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

        navigateTo = (url: string) => {
            this.$location.url(url);
        }

        isItemActive = (url: string) => {
            if (this.$location.url() == url) {
                return 'active';
            } else {
                return '';
            }
        }
    }

    angular.module('TheHub').controller('AppController', AppController);
}