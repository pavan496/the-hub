module TheHub {
    export class HomeController {
        static $inject = ['UserService'];
        private user: User;

        constructor(private userService: IUserService) {
            this.user = this.userService.getDetails();
        }
    }

    angular.module('TheHub').controller('HomeController', HomeController);
}