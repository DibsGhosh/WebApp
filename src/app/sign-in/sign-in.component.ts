import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsServices } from '../Services/UserDetails/userDetails.services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  UserName:string = "";
  password:string = "";
  loginError: boolean = false;
  WantsSignUp: boolean = false;
  constructor(protected User:UserDetailsServices, public _router:Router) {

   }

  ngOnInit(): void {
    // this.sendStatus();
  }
  checkInfo(form:NgForm){
    console.log(form.value);
    
  }
  @Output()
  loginStatus:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  signUp:EventEmitter<boolean> = new EventEmitter<boolean>();

  sendStatus(){
    console.log("Emited data:" + this.loginError);
    
    this.loginStatus.emit(this.loginError);

  }

  onSignIn():void{
    if(this.User.validate(this.UserName, this.password)){
      this.loginError=false;
      this.User.isLoggedin$.next(true);
      this.User.loggedInUser$.next(this.UserName);
      console.log('routed');
      console.log("service: ");
      // this.sendStatus();
      this._router.navigate(['/dashboard']);
    }
    else{
      this.loginError = true;
      console.log("login error");
    }

    // if(!this.loginError){
    //   //User is correct so we need to navigate
    //   this.router.navigate(['/dashboard']);
    // }
  }
  ghostSignUp(){
      this._router.navigate(['./signUp']);
      
  }
  

}
