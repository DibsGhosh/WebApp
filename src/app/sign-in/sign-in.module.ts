import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { SignInComponent } from './sign-in.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    SignInComponent,
    FormsModule
  ]
})
export class SignInModule { }
