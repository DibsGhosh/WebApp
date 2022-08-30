import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { IEmployee } from 'src/app/model/employeeInterface/employee.interface';
import { EmployeeService } from 'src/app/Services/EmployeeDetails/employee.service';
import { DialogComponent } from '../view/dialog/dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    userType: 'Permanent',
    actions: undefined
  }

  constructor(protected _routed:ActivatedRoute, protected _list:EmployeeService, public dialog: MatDialog) { }
  nan:number = NaN;
  ngOnInit(): void {
    if(this._routed.snapshot.queryParamMap.has('empcode')){
      this.empCode= +(this._routed.snapshot.queryParamMap.get('empcode'))!;
    }
    this._list.getEmployeeDetails(this.empCode).subscribe(data => {
      this.employeeInfo = data;
    })
  }

  saveInfo(form:NgForm){

  }

  submit(){

    const dialogRef = this.dialog.open(DialogComponent);
    
  }

}
