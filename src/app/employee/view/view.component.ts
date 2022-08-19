import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/model/employeeInterface/employee.interface';
import { EmployeeService } from 'src/app/Services/EmployeeDetails/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  empCode:any;
  employeeDetails:IEmployee = {
    ecode: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    address1: '',
    address2: '',
    gender: 'Male',
    salary: 0,
    pincode: 0,
    userType: 'Contractual',
    actions: undefined
  }
  constructor(protected _routed:ActivatedRoute, protected _list:EmployeeService, protected _route:Router) { }

  ngOnInit(): void {
    this.empCode = this._routed.snapshot.paramMap.get('id');
    if(this.empCode !== null && this._list.getEmployeeDetails(+(this.empCode)) !== undefined){
      this.employeeDetails = this._list.getEmployeeDetails(+(this.empCode));}
  }

  routeBack(){
    this._route.navigate(['/employee']);
  }
}
