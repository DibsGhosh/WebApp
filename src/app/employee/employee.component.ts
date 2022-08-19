import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee } from '../model/employeeInterface/employee.interface';
import { EmployeeService } from '../Services/EmployeeDetails/employee.service';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['ecode', 'firstName', 'gender', 'userType', 'actions'];
  constructor(private _DataList:EmployeeService, protected _router:Router,  public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  dataSource= this._DataList.getEmployeeList();

  viewClicked(value:any){
    this._router.navigate(['/employee/view', value]);
  }
  editClicked(emp:IEmployee){
    this._router.navigate(['/employee/edit'],
    {queryParams:{'empcode':emp.ecode}});
  }
  deleteClicked(){
    const dialogRef = this.dialog.open(DeleteComponent);
  }

}
