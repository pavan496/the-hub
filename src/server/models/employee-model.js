"use strict";
/**
 * Employeee model
 */
var EmployeeModel = (function () {
    function EmployeeModel(employeeModel) {
        this._employeeModel = employeeModel;
    }
    Object.defineProperty(EmployeeModel.prototype, "name", {
        get: function () {
            return this._employeeModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeModel.prototype, "employeeNo", {
        get: function () {
            return this._employeeModel.employeeNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeModel.prototype, "mobile", {
        get: function () {
            return this._employeeModel.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeModel.prototype, "email", {
        get: function () {
            return this._employeeModel.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeModel.prototype, "designation", {
        get: function () {
            return this._employeeModel.designation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeModel.prototype, "dateOfBirth", {
        get: function () {
            return this._employeeModel.dateOfBirth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeModel.prototype, "dateOfJoining", {
        get: function () {
            return this._employeeModel.dateOfJoining;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeModel;
}());
exports.EmployeeModel = EmployeeModel;
Object.seal(EmployeeModel);
//# sourceMappingURL=employee-model.js.map