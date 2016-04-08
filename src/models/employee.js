/**
 * Employee Model
 */
var Employee = (function () {
    function Employee(name, employeeNo, mobile, email, designation, dateOfBirth, dateOfJoining) {
        this.name = name;
        this.employeeNo = employeeNo;
        this.mobile = mobile;
        this.email = email;
        this.designation = designation;
        this.dateOfBirth = dateOfBirth;
        this.dateOfJoining = dateOfJoining;
    }
    return Employee;
})();
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map