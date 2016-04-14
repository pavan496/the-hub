import * as EmployeeModel from "../models/employee-model";
import EmployeeSchema = require("../db/schemas/employee-schema");
import {RepositoryBase} from "./base/RepositoryBase";
import {IEmployeeModel} from "../models/interfaces/employee-model";

export class EmployeeRepository extends RepositoryBase<IEmployeeModel> {
    constructor() {
        super(EmployeeSchema);
    }
}

Object.seal(EmployeeRepository);