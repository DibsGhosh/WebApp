import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(protected _route:Router) { }

  ngOnInit(): void {
  }
  routeBack(){
    this._route.navigate(['./employee']);
  }
}
