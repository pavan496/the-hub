/**
 * Employee Model 
 */
export class Employee {
    name: string;
    employeeNo: string;
    mobile: string;
    email: string;
    designation: string;

    constructor(name: string, employeeNo: string, mobile: string, email: string, designation: string) {
        this.name = name;
        this.employeeNo = employeeNo;
        this.mobile = mobile;
        this.email = email;
        this.designation = designation;
    }
}