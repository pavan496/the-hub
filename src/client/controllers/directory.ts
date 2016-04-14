import {Employee} from '../../models/employee';

module TheHub {
    /**
     * Home page controller.
     */
    export class DirectoryController {

        employees: Array<Employee> = new Array<Employee>();
        selectedEmployee: Employee;
        searchQuery: string = '';

        static $inject = ['$http', '$mdSidenav']

        constructor(private $http: ng.IHttpService, private $mdSidenav: angular.material.ISidenavService) {
            this.loadEmployees();
        }

        loadEmployees = () => {
            this.$http.get('/secure/employees?q=' + this.searchQuery).then((response: ng.IHttpPromiseCallbackArg<Employee[]>) => {
                this.employees = response.data;
                console.log(response.data);
            }, (error: any) => {

            });
        }

        showEmployee = (employee: Employee) => {
            this.selectedEmployee = employee;
            this.$mdSidenav('right').toggle();

        }
    }

    angular.module('TheHub').controller('DirectoryController', DirectoryController);
}