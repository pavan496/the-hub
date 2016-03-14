module TheHub {
    export interface IUserService {
        getDetails(): User;
    }

    class UserService implements IUserService {
        static $inject = ['$http'];

        constructor(private $http: ng.IHttpService) {
        }

        getDetails(): User {
            return { 'username': 'pavan' };
        }
    }

    angular.module('TheHub').service('UserService', UserService);
}