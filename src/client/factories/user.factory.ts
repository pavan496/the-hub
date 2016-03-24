import {RootScopeExt} from '../../models/root.scope';

module TheHub {
    export interface IUserFactory {
        isAuthenticated(): ng.IPromise<String>;
    }

    /**
     * User Factory definition. Contains methods related to User login status.
     */
    class UserFactory implements IUserFactory {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $rootScope: RootScopeExt) {
        }

        /**
         * Checks if the user is authenticated. 
         * If authentication is already checked once, then the status of authentication will be returned. 
         * Else, a service will be fired to check if the user is already logged in. 
         */
        isAuthenticated(): ng.IPromise<String> {

            //Create an instance of deferred
            let deferred = this.$q.defer();

            //Check if authentication is already checked.
            if (this.$rootScope.auth && this.$rootScope.auth.isAuthenticationChecked) {

                //Check and return the authentication status.
                if (this.$rootScope.auth.isAuthenticated) {
                    deferred.resolve('OK');
                } else {
                    deferred.reject('Unauthorized');
                }
            } else {
                //Make a GET call to /secure/user to check if the user is logged in and a session cookie is present. 
                this.$http.get('secure/user').then(
                    (response: ng.IHttpPromiseCallbackArg<{}>) => {
                        //User is logged in. Setup authenticated status. 
                        this.$rootScope.auth = { isAuthenticationChecked: true, isAuthenticated: true };
                        deferred.resolve('OK');
                    },
                    (error: any) => {
                        //User is not logged in. Reject the promise.
                        this.$rootScope.auth = { isAuthenticationChecked: true, isAuthenticated: false };
                        deferred.reject('Unauthorized');
                    });
            }
            return deferred.promise;
        }
    }

    function userFactory($http: ng.IHttpService, $q: ng.IQService, $rootScope: any) {
        return new UserFactory($http, $q, $rootScope);
    }

    userFactory.$inject = ['$http', '$q', '$rootScope'];

    angular.module('TheHub').factory('UserFactory', userFactory);
}