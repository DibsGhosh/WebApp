import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './employee/view/view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"signIn", component:SignInComponent},
  {path: "signUp", component:SignUpComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"employee/view/:id", component:ViewComponent},
  {path:"employee/edit", component:EditComponent},
  {path:"employee/delete", component:DeleteComponent},
  {path:"", redirectTo:"signIn", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
