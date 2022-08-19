export interface IEmployee{
    ecode:number;
    firstName: string;
    middleName: string;
    lastName: string;
    address1: string;
    address2: string;
    gender: "Male" | "Female";
    salary: number;
    pincode: number;
    userType: "Contractual" | "Permanent";
    actions:any;
}