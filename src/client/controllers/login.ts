import {RootScopeExt} from '../../models/root.scope';

module TheHub {
    /**
     * Login page controller.
     */
    export class LoginController {

        loginBtnEnabled: boolean = true;

        static $inject = ['$http', '$rootScope', '$location'];
        constructor(private $http: ng.IHttpService, private $rootScope: RootScopeExt, private $location: ng.ILocationService) {
        }

        /**
         * Method to check if the user is logged in 
         */
        login(user: {}) {
            this.loginBtnEnabled = false;
            this.$http.post('/login', user).then((value: ng.IHttpPromiseCallbackArg<{}>) => {
                this.$rootScope.auth = { isAuthenticated: true, isAuthenticationChecked: true };
                this.$location.url('/');
            }, (error: any) => {
                this.$rootScope.auth = { isAuthenticated: false, isAuthenticationChecked: true };
                this.$rootScope.showToast('Invalid Username/Password combination!');
                this.loginBtnEnabled = true;
            });
        }
    }

    angular.module('TheHub').controller('LoginController', LoginController);
}