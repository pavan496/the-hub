import {IEmployeeModel} from "./interfaces/employee-model";

/**
 * Employeee model
 */
export class EmployeeModel {

    private _employeeModel: IEmployeeModel;

    constructor(employeeModel: IEmployeeModel) {
        this._employeeModel = employeeModel;
    }

    get name(): string {
        return this._employeeModel.name;
    }

    get employeeNo(): string {
        return this._employeeModel.employeeNo;
    }

    get mobile(): string {
        return this._employeeModel.mobile;
    }

    get email(): string {
        return this._employeeModel.email;
    }

    get designation(): string {
        return this._employeeModel.designation;
    }

    get dateOfBirth(): Date {
        return this._employeeModel.dateOfBirth;
    }

    get dateOfJoining(): Date {
        return this._employeeModel.dateOfJoining;
    }
}

Object.seal(EmployeeModel);