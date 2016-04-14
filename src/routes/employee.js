"use strict";
var logger = require('winston');
var employee_service_1 = require("./../server/services/employee-service");
/**
 * Configuring REST URLs for user.
 */
function setup(router) {
    logger.info('Setting up request mapping for for employees');
    router.get('/secure/employees', function (req, res) {
        var employeeService = new employee_service_1.EmployeeService();
        var employee = {
            name: "Test",
            employeeNo: "1002",
            mobile: "string",
            email: "string",
            designation: "string",
            dateOfBirth: new Date(),
            dateOfJoining: new Date()
        };
        employeeService.retrieve(function onResponse(error, result) {
            res.json(result);
        });
    });
    router.get('/employee', function (req, res) {
        var employeeService = new employee_service_1.EmployeeService();
        employeeService.findById(req.query.id, function onResponse(error, result) {
            res.json(result);
        });
    });
    return router;
}
exports.setup = setup;
//# sourceMappingURL=employee.js.map