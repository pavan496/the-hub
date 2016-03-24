import {RootScopeExt} from '../../models/client/root.scope';
import {IRouteParams} from '../../models/client/route.params';

module TheHub {
    /**
     * Login page controller.
     */
    export class LoginController {

        loginBtnEnabled: boolean = true;

        static $inject = ['$http', '$rootScope', '$location', '$routeParams'];
        constructor(private $http: ng.IHttpService, private $rootScope: RootScopeExt, private $location: ng.ILocationService, private $routeParams: IRouteParams) {
        }

        /**
         * Method to check if the user is logged in 
         */
        login(user: {}) {
            this.loginBtnEnabled = false;
            this.$http.post('/login', user).then((value: ng.IHttpPromiseCallbackArg<{}>) => {

                this.$rootScope.auth = {
                    isAuthenticated: true,
                    isAuthenticationChecked: true,
                    user: value.data
                };

                this.$location.url(this.$routeParams.continue ? this.$routeParams.continue : '/');
            }, (error: any) => {

                this.$rootScope.auth = {
                    isAuthenticated: false,
                    isAuthenticationChecked: true,
                    user: null
                };

                this.$rootScope.showToast('Invalid Username/Password combination!');
                this.loginBtnEnabled = true;
            });
        }
    }

    angular.module('TheHub').controller('LoginController', LoginController);
}