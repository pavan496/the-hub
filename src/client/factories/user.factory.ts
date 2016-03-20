module TheHub {
    export interface IUserFactory {
        isAuthenticated(): ng.IPromise<String>;
    }

    class UserFactory implements IUserFactory {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $rootScope: any) {
        }

        isAuthenticated(): ng.IPromise<String> {
            let deferred = this.$q.defer();
            if (this.$rootScope.auth && this.$rootScope.auth.isAuthenticationChecked) {
                if (this.$rootScope.auth.isAuthenticated) {
                    deferred.resolve('OK');
                } else {
                    deferred.reject('Unauthorized');
                }
            } else {
                this.$http.get('secure/user').then(
                    (response: ng.IHttpPromiseCallbackArg<{}>) => {
                        if (!this.$rootScope.auth) {
                            this.$rootScope.auth = {};
                        }
                        this.$rootScope.auth.isAuthenticationChecked = true;
                        this.$rootScope.auth.isAuthenticated = true;
                        deferred.resolve('OK');
                    },
                    (error: any) => {
                        if (!this.$rootScope.auth) {
                            this.$rootScope.auth = {};
                        }
                        this.$rootScope.auth.isAuthenticationChecked = true;
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