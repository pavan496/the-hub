var TheHub;
(function (TheHub) {
    "use strict";
    //Function to configure routes
    function routes($routeProvider) {
        /**
         * Resolver checks if the user is authenticated.
         */
        var accessResolver = ['UserFactory', function (UserFactory) {
                return UserFactory.isAuthenticated();
            }];
        //Configuring routes
        $routeProvider.when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            resolve: accessResolver
        }).when('/login', {
            templateUrl: '/views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        }).when('/directory', {
            templateUrl: '/views/directory.html',
            controller: 'DirectoryController',
            controllerAs: 'dirCtrl',
            resolve: accessResolver
        }).otherwise({
            redirectTo: '/'
        });
    }
    //Injecting $routeProvider to the routes function
    routes.$inject = ['$routeProvider'];
    //Passing the routes method to config and thereby initializing routes.
    angular.module('TheHub').config(routes);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=app.routes.js.map