import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logOutvar:boolean = false;
  constructor(protected _route:Router) { }

  ngOnInit(): void {
  }
  @Output()
  logOut:EventEmitter<boolean> = new EventEmitter<boolean>();

  onLogOut(){
    this._route.navigate(["./signIn"]);
    
  }

  

}
