module TheHub {
    "use strict";

    //Function to configure routes
    function routes($routeProvider: ng.route.IRouteProvider) {

        //Configuring routes
        $routeProvider.when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        }).otherwise({
            redirectTo: '/'
        });
    }

    //Injecting $routeProvider to the routes function
    routes.$inject = ['$routeProvider'];

    //Passing the routes method to config and thereby initializing routes.
    angular.module('TheHub').config(routes);
}