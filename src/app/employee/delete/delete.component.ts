import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(protected _route:Router) { }

  ngOnInit(): void {
  }

  routeBack(){
    this._route.navigate(['./employee']);
  }

  deleteBack(){
    this._route.navigate(['./employee']);
  }
}
