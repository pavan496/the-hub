import {Connector} from "../connector";
import {IEmployeeModel} from "../../models/interfaces/employee-model";

var mongoose = Connector.mongooseInstance;
var mongooseConnection = Connector.mongooseConnection;

class EmployeeSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            employeeNo: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
                required: false
            },
            email: {
                type: String,
                required: false
            },
            designation: {
                type: String,
                required: false
            },
            dateOfBirth: {
                type: Date,
                required: false
            },
            dateOfJoining: {
                type: Date,
                required: false
            }
        });
        return schema;
    }
}

var schema = mongooseConnection.model<IEmployeeModel>("Employees", EmployeeSchema.schema);
export = schema;