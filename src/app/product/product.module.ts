import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    ProductComponent,
    CreateNewComponent,
    ViewProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductComponent,
    CreateNewComponent
  ]
})
export class ProductModule { }
