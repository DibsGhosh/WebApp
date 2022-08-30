import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IEmployee } from '../model/employeeInterface/employee.interface';
import { IProduct } from '../model/productInterface/product.interface';
import { EmployeeService } from '../Services/EmployeeDetails/employee.service';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'gender', 'userType', 'actions'];
  dataSource:IEmployee[] = [];
  constructor(private _DataList:EmployeeService, protected _router:Router,  public dialog: MatDialog) { }
  ngOnInit(): void {

    let subject= new ReplaySubject();

    this._DataList.getEmployeeByApi().subscribe((data) => {
      this.dataSource = data;
      subject.next(this.dataSource);
      subject.complete();
    });
  }
  
  

  viewClicked(value:any){
    this._router.navigate(['/employee/view', value]);
  }
  editClicked(emp:IEmployee){
    this._router.navigate(['/employee/edit'],
    {queryParams:{'empcode':emp.ecode}});
  }
  deleteClicked(emp:IEmployee){
    // const dialogRef = this.dialog.open(DeleteComponent);
    this._router.navigate(['/employee/delete'],
    {queryParams:{'empcode':emp.ecode}});
  }

}
