import {RootScopeExt} from '../../models/client/root.scope';

module TheHub {
    /**
     * Root controller.
     */
    export class AppController {

        static $inject = ['$mdSidenav', '$http', '$rootScope', '$location'];

        menu: Array<{}> = new Array();

        constructor(private $mdSidenav: angular.material.ISidenavService, private $http: ng.IHttpService, private $rootScope: RootScopeExt, private $location: ng.ILocationService) {
            let directoryMenu: {} = { label: 'Employee Directory', menuItems: [{ title: 'View Directory', icon: 'storage', url: '/directory' }] };
            let accountMenu: {} = { label: 'My Account', menuItems: [{ title: 'My Profile', icon: 'account_circle', url: '/profile' }, { title: 'Logout', icon: 'settings_power', url: '/logout' }] };

            this.menu.push(directoryMenu);
            this.menu.push(accountMenu);
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
            if (url == '/logout') {
                this.logout();
            } else {
                this.$location.url(url);
            }

            if (!this.$mdSidenav('left').isLockedOpen()) {
                this.$mdSidenav('left').close();
            }
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