import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsServices } from '../Services/UserDetails/userDetails.services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpUser:string = "";
  SignUpPassword:string = "";
  SignUpError:boolean = false;
  WantsSignIn:boolean = false;
  constructor(protected User:UserDetailsServices, protected _router:Router) { }

  ngOnInit(): void {
  }

  checkInfo(form:NgForm){
    console.log(form.value);
    
  }

  @Output()
  registered:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  signIn:EventEmitter<boolean> = new EventEmitter<boolean>();

  onSignUp():void{
    if(!this.User.registerUser(this.SignUpUser, this.SignUpPassword)){
      this._router.navigate(['/dashboard']);
    }
  

  }

  ghostSignIn(){
    this._router.navigate(['./signIn']);
   
  }
}
