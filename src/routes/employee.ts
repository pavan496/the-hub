import * as express from 'express';
import * as logger from 'winston';
import {Employee} from '../models/employee';
import {IEmployeeModel} from "./../server/models/interfaces/employee-model";
import {EmployeeService} from "./../server/services/employee-service";
/**
 * Configuring REST URLs for user.
 */
export function setup(router: express.Router) {
    logger.info('Setting up request mapping for for employees');
    router.get('/secure/employees', (req: any, res: express.Response) => {
        var employeeService = new EmployeeService();

        var employee = <IEmployeeModel>{
            name: "Test",
            employeeNo: "1002",
            mobile: "string",
            email: "string",
            designation: "string",
            dateOfBirth: new Date(),
            dateOfJoining: new Date()
        }

        employeeService.retrieve(function onResponse(error, result) {
            res.json(result);
        });
    });

    router.get('/employee', (req: any, res: express.Response) => {
        var employeeService = new EmployeeService();
        employeeService.findById(req.query.id, function onResponse(error, result) {
            res.json(result);
        });
    });


    return router;
}