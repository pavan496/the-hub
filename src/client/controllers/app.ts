module TheHub {
    /**
     * Root controller.
     */
    export class AppController {

        static $inject = ['$mdSidenav'];

        constructor(private $mdSidenav: angular.material.ISidenavService) {
        }

        /**
         * Handler for button click to show/hide left menu.
         */
        openLeftMenu = () => {
            this.$mdSidenav('left').toggle();
        }
    }

    angular.module('TheHub').controller('AppController', AppController);
}