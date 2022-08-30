import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/model/employeeInterface/employee.interface';
import { EmployeeService } from 'src/app/Services/EmployeeDetails/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employeeForm!:FormGroup;
  empCode:any;
  employeeDetails:IEmployee | any = {
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
  constructor(protected _routed:ActivatedRoute, protected _list:EmployeeService, protected _route:Router, private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.empCode = this._routed.snapshot.paramMap.get('id');
    this._list.getEmployeeDetails(this.empCode).subscribe(data => {
      this.employeeForm.setValue(data);
    })

      this.employeeForm =  this._fb.group({
        firstName: [``],
        middleName: [``],
        lastName: [``],
        ecode: [``],
        gender: [``],
        salary: [``],
        address1: [``],
        address2: [``],
        pincode: [``],
        userType: [``]
  })
}

  routeBack(){
    this._route.navigate(['/employee']);
  }
}
