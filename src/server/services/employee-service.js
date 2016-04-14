"use strict";
/// <reference path="../../../typings/tsd.d.ts" />
var employee_repository_1 = require("./../repositories/employee-repository");
var EmployeeService = (function () {
    function EmployeeService() {
        this._EmployeeRepository = new employee_repository_1.EmployeeRepository();
    }
    EmployeeService.prototype.create = function (item, callback) {
        this._EmployeeRepository.create(item, callback);
    };
    EmployeeService.prototype.retrieve = function (callback) {
        this._EmployeeRepository.retrieve(callback);
    };
    EmployeeService.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._EmployeeRepository.findById(_id, function (err, res) {
            if (err) {
                callback(err, res);
            }
            else {
                _this._EmployeeRepository.update(res._id, item, callback);
            }
        });
    };
    EmployeeService.prototype.delete = function (_id, callback) {
        this._EmployeeRepository.delete(_id, callback);
    };
    EmployeeService.prototype.findById = function (_id, callback) {
        this._EmployeeRepository.findById(_id, callback);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
Object.seal(EmployeeService);
//# sourceMappingURL=employee-service.js.map