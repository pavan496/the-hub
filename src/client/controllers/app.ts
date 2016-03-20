/**
 * Parent controller
 * 
 */

module TheHub {
    export class AppController {

        static $inject = ['$mdSidenav'];

        constructor(private $mdSidenav: angular.material.ISidenavService) {
        }

        openLeftMenu = () => {
            this.$mdSidenav('left').toggle();
        }
    }

    angular.module('TheHub').controller('AppController', AppController);
}