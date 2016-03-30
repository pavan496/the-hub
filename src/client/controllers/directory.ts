import {Employee} from '../../models/employee';

module TheHub {
    /**
     * Home page controller.
     */
    export class DirectoryController {

        employees: Array<Employee> = new Array<Employee>();

        static $inject = ['$http']

        constructor(private $http: ng.IHttpService) {
            debugger;
            this.loadEmployees();
        }

        loadEmployees = () => {
            this.$http.get('/secure/employees').then((response: ng.IHttpPromiseCallbackArg<Employee[]>) => {
                this.employees = response.data;
                console.log(response.data);
            }, (error: any) => {

            });
        }
    }

    angular.module('TheHub').controller('DirectoryController', DirectoryController);
}