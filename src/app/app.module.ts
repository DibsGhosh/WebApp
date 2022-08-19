import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SignInModule } from './sign-in/sign-in.module';
import {MatButtonModule} from '@angular/material/button';
import { UserDetailsServices } from './Services/UserDetails/userDetails.services';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material/material.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './Services/EmployeeDetails/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignInModule,
    DashboardModule,
    MaterialModule,
    EmployeeModule
  ],
  providers: [UserDetailsServices, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
