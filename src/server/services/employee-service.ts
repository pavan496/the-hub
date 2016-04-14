/// <reference path="../../../typings/tsd.d.ts" />
import {EmployeeRepository} from "./../repositories/employee-repository";
import {IEmployeeModel} from "./../models/interfaces/employee-model";
import * as EmployeeModel from "./../models/employee-model";


export class EmployeeService {
    private _EmployeeRepository: EmployeeRepository;

    constructor() {
        this._EmployeeRepository = new EmployeeRepository();
    }

    create(item: IEmployeeModel, callback: (error: any, result: any) => void) {
        this._EmployeeRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._EmployeeRepository.retrieve(callback);
    }

    update(_id: string, item: IEmployeeModel, callback: (error: any, result: any) => void) {
        this._EmployeeRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._EmployeeRepository.update(res._id, item, callback);
            }
        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._EmployeeRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IEmployeeModel) => void) {
        this._EmployeeRepository.findById(_id, callback);
    }
}

Object.seal(EmployeeService);