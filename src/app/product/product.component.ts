import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IProduct } from '../model/productInterface/product.interface';
import { ProductService } from '../Services/ProductDetails/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['imageUrl', 'productName', 'productColor', 'price', 'actions'];
  dataSource:IProduct[] = []
  constructor(private _list:ProductService, private _route:Router) { }

  ngOnInit(): void {
    let subject= new ReplaySubject();
    this._list.getProductsByApi().subscribe((data) => {
      this.dataSource = data;
      subject.next(this.dataSource);
      subject.complete();
    });
  }

  viewClicked(prod:IProduct){
    this._route.navigate(['/product/view'], {queryParams:{'prodCode' : `${prod.productCode}`}});
  }
  editClicked(prod:IProduct){
    this._route.navigate(['/product/edit'], {queryParams:{'prodCode' : `${prod.productCode}`}});
  }

}
