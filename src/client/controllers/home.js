var TheHub;
(function (TheHub) {
    var HomeController = (function () {
        function HomeController(userService) {
            this.userService = userService;
            this.user = this.userService.getDetails();
        }
        HomeController.$inject = ['UserService'];
        return HomeController;
    })();
    TheHub.HomeController = HomeController;
    angular.module('TheHub').controller('HomeController', HomeController);
})(TheHub || (TheHub = {}));
//# sourceMappingURL=home.js.map