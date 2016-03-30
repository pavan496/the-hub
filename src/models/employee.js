/**
 * Employee Model
 */
var Employee = (function () {
    function Employee(name, employeeNo, mobile, email, designation) {
        this.name = name;
        this.employeeNo = employeeNo;
        this.mobile = mobile;
        this.email = email;
        this.designation = designation;
    }
    return Employee;
})();
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map