import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/model/employeeInterface/employee.interface';
import { EmployeeService } from 'src/app/Services/EmployeeDetails/employee.service';
import { DialogDelComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  employeeForm!:FormGroup;
  empCode:number = -1;
  employeeInfo:IEmployee | any = {
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
  };
  constructor(protected _route:Router, protected _routed:ActivatedRoute, private _list:EmployeeService, private dialog:MatDialog, private _fb:FormBuilder) { }

  ngOnInit(): void {
    if(this._routed.snapshot.queryParamMap.has('empcode')){
      this.empCode= +(this._routed.snapshot.queryParamMap.get('empcode'))!;
    }
    this._list.getEmployeeDetails(this.empCode).subscribe(data => {
      this.employeeForm.setValue(data)
    });

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

  deleteBack(){
    const dialogRef = this.dialog.open(DialogDelComponent);
  }
}
