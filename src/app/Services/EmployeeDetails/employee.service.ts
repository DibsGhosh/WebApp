import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { IEmployee } from "src/app/model/employeeInterface/employee.interface";

@Injectable()

export class EmployeeService{

    employeeUrl:string = 'api/Employee';
    employees:any;
    constructor(private _http:HttpClient){}

    // Employee:IEmployee[] = [
    //     {ecode: 1,firstName:"Roshan", middleName: "", lastName: "Singh", address1:"IND", address2:"Delhi", gender:"Male", userType:"Permanent", salary:10000, pincode:123456, actions:null},
    //     {ecode: 2,firstName:"Sunil", middleName: "Kumar", lastName: "Sen", address1:"IND", address2:"Kolkata", gender:"Male", userType:"Contractual", salary:1500, pincode:637452, actions:null},
    //     {ecode: 3,firstName:"Sima", middleName: "Das", lastName: "Gupta", address1:"IND", address2:"Kolkata", gender:"Female", userType:"Permanent", salary:15000, pincode:637112, actions:null},
    //     {ecode: 4,firstName:"Rohan", middleName: "", lastName: "Desai", address1:"IND", address2:"Vishakapatnam", gender:"Male", userType:"Contractual", salary:1000, pincode:476543, actions:null},
    //     {ecode: 5,firstName:"Rahim", middleName: "", lastName: "Sheikh", address1:"IND", address2:"Hyderabad", gender:"Male", userType:"Permanent", salary:15000, pincode:567431, actions:null},
    //     {ecode: 6,firstName:"Srestha", middleName: "", lastName: "Rawat", address1:"IND", address2:"Hyderabad", gender:"Female", userType:"Permanent", salary:12000, pincode:567455, actions:null},
    //     {ecode: 7,firstName:"Priti", middleName: "", lastName: "Singh", address1:"IND", address2:"Delhi", gender:"Female", userType: "Contractual", salary:1700, pincode:123546, actions:null},
    //     {ecode: 8,firstName:"Sunidhi", middleName: "", lastName: "Jaiswal", address1:"IND", address2:"Gujrat", gender:"Female", userType:"Permanent", salary:11000, pincode:342156, actions:null},
    //     {ecode: 9,firstName:"Rajesh", middleName: "Kumar", lastName: "Kundu", address1:"IND", address2:"Kolkata", gender:"Male", userType:"Permanent", salary:10000, pincode:637112, actions:null},
    //     {ecode: 10,firstName:"Raima", middleName: "", lastName: "Kaur", address1:"IND", address2:"Punjab", gender:"Female", userType:"Contractual", salary:1000, pincode:652189, actions:null},

    // ]

    getEmployeeByApi():Observable<IEmployee[]>{
        return this._http.get<IEmployee[]>(this.employeeUrl)
     }

    // getEmployeeList(){
    //     return this.Employee;
    // }

    getEmployeeDetails(code:number):Observable<IEmployee>{
    let subject= new ReplaySubject<IEmployee>();
     this._http.get<IEmployee[]>(this.employeeUrl).subscribe((data)=>{
     this.employees= data.find(x=>x.ecode==code);
     subject.next(this.employees);
     subject.complete();
    });
return subject;
    }
}