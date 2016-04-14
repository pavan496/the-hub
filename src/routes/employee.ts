import * as express from 'express';
import * as logger from 'winston';
import {Employee} from '../models/employee';

/**
 * Configuring REST URLs for user.
 */
export function setup(router: express.Router) {

    logger.info('Setting up request mapping for for employees');
    router.get('/secure/employees', (req: express.Request, res: express.Response) => {
        //Returning Dummy data for now.
        let employees: Array<Employee> = new Array<Employee>();

        employees.push(new Employee('User 1', '1001', '9849400001', 'user1@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new Employee('User 2', '1002', '9849400002', 'user2@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new Employee('User 3', '1003', '9849400003', 'user3@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new Employee('User 4', '1004', '9849400004', 'user4@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new Employee('User 5', '1005', '9849400005', 'user5@acme.com', 'Developer', new Date(), new Date()));

        res.json(employees);
    });

    return router;
}