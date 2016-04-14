import * as Mongoose from "mongoose";

export interface IEmployeeModel extends Mongoose.Document {
    name: string;
    employeeNo: string;
    mobile: string;
    email: string;
    designation: string;
    dateOfBirth: Date;
    dateOfJoining: Date;
}
