import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../material/material.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './edit/dialog/dialog.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    EmployeeComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent
  ]
})
export class EmployeeModule { }
