"use strict";
var TheHub;
(function (TheHub) {
    /**
     * User Factory definition. Contains methods related to User login status.
     */
    var UserFactory = (function () {
        function UserFactory($http, $q, $rootScope) {
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
        }
        /**
         * Checks if the user is authenticated.
         * If authentication is already checked once, then the status of authentication will be returned.
         * Else, a service will be fired to check if the user is already logged in.
         */
        UserFactory.prototype.isAuthenticated = function () {
            var _this = this;
            //Create an instance of deferred
            var deferred = this.$q.defer();
            //Check if authentication is already checked.
            if (this.$rootScope.auth && this.$rootScope.auth.isAuthenticationChecked) {
                //Check and return the authentication status.
                if (this.$rootScope.auth.isAuthenticated) {
                    deferred.resolve('OK');
                }
                else {
                    deferred.reject('Unauthorized');
                }
            }
            else {
                //Make a GET call to /secure/user to check if the user is logged in and a session cookie is present. 
                this.$http.get('secure/user').then(function (response) {
                    //User is logged in. Setup authenticated status. 
                    _this.$rootScope.auth = { isAuthenticationChecked: true, isAuthenticated: true, user: response.data };
                    deferred.resolve('OK');
                }, function (error) {
                    //User is not logged in. Reject the promise.
                    _this.$rootScope.auth = { isAuthenticationChecked: true, isAuthenticated: false, user: null };
                    deferred.reject('Unauthorized');
                });
            }
            return deferred.promise;
        };
        return UserFactory;
    }());
    function userFactory($http, $q, $rootScope) {
        return new UserFactory($http, $q, $rootScope);
    }
    userFactory.$inject = ['$http', '$q', '$rootScope'];
    angular.module('TheHub').factory('UserFactory', userFactory);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=user.factory.js.map