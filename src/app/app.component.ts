import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsServices } from './Services/UserDetails/userDetails.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApp';
  constructor(protected userStatus:UserDetailsServices, protected _route:Router){

  }
  // @Input()
  // userLoggedIn:boolean = false;
  // catchLogStatus(value:boolean){
  //   this.userLoggedIn = !value;
  //   console.log("catched log status value:" + this.userLoggedIn);
    
  // }
  showNav:boolean = this.userStatus.isLoggedin=false;

  onLogOut(){
    this.userStatus.isLoggedin=false;
    this._route.navigate(["./signIn"]);
    
  }
  routeEmp(){
    this._route.navigate(['/employee']);
  }
}
