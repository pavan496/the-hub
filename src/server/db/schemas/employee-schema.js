"use strict";
var connector_1 = require("../connector");
var mongoose = connector_1.Connector.mongooseInstance;
var mongooseConnection = connector_1.Connector.mongooseConnection;
var EmployeeSchema = (function () {
    function EmployeeSchema() {
    }
    Object.defineProperty(EmployeeSchema, "schema", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeSchema;
}());
var schema = mongooseConnection.model("Employees", EmployeeSchema.schema);
module.exports = schema;
//# sourceMappingURL=employee-schema.js.map