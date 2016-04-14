"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmployeeSchema = require("../db/schemas/employee-schema");
var RepositoryBase_1 = require("./base/RepositoryBase");
var EmployeeRepository = (function (_super) {
    __extends(EmployeeRepository, _super);
    function EmployeeRepository() {
        _super.call(this, EmployeeSchema);
    }
    return EmployeeRepository;
}(RepositoryBase_1.RepositoryBase));
exports.EmployeeRepository = EmployeeRepository;
Object.seal(EmployeeRepository);
//# sourceMappingURL=employee-repository.js.map