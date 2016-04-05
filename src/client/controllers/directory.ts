import {Employee} from '../../models/employee';

module TheHub {
    /**
     * Home page controller.
     */
    export class DirectoryController {

        employees: Array<Employee> = new Array<Employee>();
        selectedEmployee: Employee;

        static $inject = ['$http']

        constructor(private $http: ng.IHttpService) {
            this.loadEmployees();
        }

        loadEmployees = () => {
            this.$http.get('/secure/employees').then((response: ng.IHttpPromiseCallbackArg<Employee[]>) => {
                this.employees = response.data;
                console.log(response.data);
            }, (error: any) => {

            });
        }

        showEmployee = (employee: Employee) => {
            this.selectedEmployee = employee;
        }
    }

    angular.module('TheHub').controller('DirectoryController', DirectoryController);
}