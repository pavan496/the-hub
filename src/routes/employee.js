var logger = require('winston');
var employee_1 = require('../models/employee');
/**
 * Configuring REST URLs for user.
 */
function setup(router) {
    logger.info('Setting up request mapping for for employees');
    router.get('/secure/employees', function (req, res) {
        //Returning Dummy data for now.
        var employees = new Array();
        employees.push(new employee_1.Employee('User 1', '1001', '9849400001', 'user1@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new employee_1.Employee('User 2', '1002', '9849400002', 'user2@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new employee_1.Employee('User 3', '1003', '9849400003', 'user3@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new employee_1.Employee('User 4', '1004', '9849400004', 'user4@acme.com', 'Developer', new Date(), new Date()));
        employees.push(new employee_1.Employee('User 5', '1005', '9849400005', 'user5@acme.com', 'Developer', new Date(), new Date()));
        res.json(employees);
    });
    return router;
}
exports.setup = setup;
//# sourceMappingURL=employee.js.map