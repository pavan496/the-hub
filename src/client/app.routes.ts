module TheHub {
    "use strict";

    interface IMyRoute extends ng.route.IRoute {
        title: string;
    }

    //Function to configure routes
    function routes($routeProvider: ng.route.IRouteProvider) {

        /**
         * Resolver checks if the user is authenticated.
         */
        let accessResolver = ['UserFactory', (UserFactory: any) => {
            return UserFactory.isAuthenticated();
        }];

        //Configuring routes
        $routeProvider.when('/', <IMyRoute>{
            title: 'Home',
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            resolve: accessResolver
        }).when('/login', <IMyRoute>{
            title: 'Login',
            templateUrl: '/views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        }).when('/directory', <IMyRoute>{
            title: 'Employee Directory',
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
}