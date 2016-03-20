var TheHub;
(function (TheHub) {
    var UserFactory = (function () {
        function UserFactory($http, $q, $rootScope) {
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
        }
        UserFactory.prototype.isAuthenticated = function () {
            var _this = this;
            var deferred = this.$q.defer();
            if (this.$rootScope.auth && this.$rootScope.auth.isAuthenticationChecked) {
                if (this.$rootScope.auth.isAuthenticated) {
                    deferred.resolve('OK');
                }
                else {
                    deferred.reject('Unauthorized');
                }
            }
            else {
                this.$http.get('secure/user').then(function (response) {
                    if (!_this.$rootScope.auth) {
                        _this.$rootScope.auth = {};
                    }
                    _this.$rootScope.auth.isAuthenticationChecked = true;
                    _this.$rootScope.auth.isAuthenticated = true;
                    deferred.resolve('OK');
                }, function (error) {
                    if (!_this.$rootScope.auth) {
                        _this.$rootScope.auth = {};
                    }
                    _this.$rootScope.auth.isAuthenticationChecked = true;
                    deferred.reject('Unauthorized');
                });
            }
            return deferred.promise;
        };
        return UserFactory;
    })();
    function userFactory($http, $q, $rootScope) {
        return new UserFactory($http, $q, $rootScope);
    }
    userFactory.$inject = ['$http', '$q', '$rootScope'];
    angular.module('TheHub').factory('UserFactory', userFactory);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=user.factory.js.map