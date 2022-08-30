import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../material/material.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './view/dialog/dialog.component';
import { DialogDelComponent } from './delete/dialog/dialog.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    DialogComponent,
    DialogDelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EmployeeComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent
  ]
})
export class EmployeeModule { }
