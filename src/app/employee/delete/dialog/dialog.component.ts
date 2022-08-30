import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogDelComponent implements OnInit {

  constructor(protected _route:Router) { }

  ngOnInit(): void {
  }

  delete(){
    this._route.navigate(['./employee']);
  }
}
