import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsServices } from './Services/UserDetails/userDetails.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'WebApp';
  showNav:boolean = false;
  firstName:string = '';
  lastName:string = ''
  dropDownCondition:boolean = false
  constructor(protected userStatus:UserDetailsServices, protected _route:Router){

  }

  

  ngOnInit(){
    console.log(this.showNav);
    if(this.showNav === false){
      console.log("showNav on load: " + this.showNav);
      this._route.navigate(['./signIn']);
    }
    this.userStatus.isLoggedin$.subscribe(data => {
      this.showNav = data
      if(this.showNav === true){
        this.userStatus.loggedInUser$.subscribe(data => {
          let temp = this.userStatus.sendName(data)
          this.firstName = temp.firstName!;
          this.lastName = temp.lastName!;
        })
      }
    })
    
    
    
    
  }
  @ViewChild('dropdownMenu') button!:ElementRef
  ngAfterViewInit(){
    
    console.log("dom: " + this.button);
    
  }
  // @Input()
  // showNav:boolean = false;
  // catchLogStatus(value:boolean){
  //   this.showNav = !value;
  //   console.log("catched log status value:" + this.showNav);
    
  // }
  // showNav:boolean = this.userStatus.isLoggedin=false;

  onLogOut(){
    this.userStatus.isLoggedin$.next(false);
    this.showNav= false;
    this._route.navigate(["./signIn"]);
    
  }
  routeEmp(){
    this._route.navigate(['/employee']);
  }
  Animation(){
   
    
    this.dropDownCondition = !this.dropDownCondition;
    console.log("clicked: " + this.dropDownCondition);
  }
}

// const dropDown = document.querySelector('#dropdownMenuButton');
