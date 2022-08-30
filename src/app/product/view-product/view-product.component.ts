import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IProduct } from 'src/app/model/productInterface/product.interface';
import { ProductService } from 'src/app/Services/ProductDetails/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productForm!:FormGroup;
  prodCode:string = '';
  product:IProduct = {
    productCategory: 'Electronics',
    productName: '',
    productCode: '',
    productColor: '',
    prodDescription: '',
    price: 0,
    inStockQuantity: 0,
    imageUrl: ''
  }
  constructor(private _list:ProductService, private _routed:ActivatedRoute, private _fb:FormBuilder, private _route:Router) { }

  ngOnInit(): void {
    if(this._routed.snapshot.queryParamMap.has('prodCode')){
      this.prodCode = this._routed.snapshot.queryParamMap.get('prodCode')!;
    }

    this._list.getProductDetails(this.prodCode).subscribe(data => {
      this.product = data;
      this.productForm.setValue(data)
    })
    this.productForm =  this._fb.group({
        productCategory: [``],
        productName: [``],
        productCode: [``],
        productColor: [``],
        prodDescription: [``],
        price: [``],
        inStockQuantity: [``]
      })

    
  }

  routeBack(){
    this._route.navigate(['/product'])
  }



}
