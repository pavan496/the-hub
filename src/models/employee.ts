/**
 * Employee Model 
 */
export class Employee {
    name: string;
    employeeNo: string;
    mobile: string;
    email: string;
    designation: string;
    dateOfBirth: Date;
    dateOfJoining: Date;

    constructor(name: string, employeeNo: string, mobile: string, email: string, designation: string, dateOfBirth: Date, dateOfJoining: Date) {
        this.name = name;
        this.employeeNo = employeeNo;
        this.mobile = mobile;
        this.email = email;
        this.designation = designation;
        this.dateOfBirth = dateOfBirth;
        this.dateOfJoining = dateOfJoining;
    }
}