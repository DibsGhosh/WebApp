import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/model/productInterface/product.interface';
import { ProductService } from 'src/app/Services/ProductDetails/product.service';
import { PriceValidator } from 'src/app/validators/price.validator';
import { UrlValidator } from 'src/app/validators/url.validator';
import { ProductComponent } from '../product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm!:FormGroup;
  prodCode:string = '';
  product:any;
  constructor(private _fb:FormBuilder, private _route:Router, private _routed:ActivatedRoute, private _list:ProductService) { }

  ngOnInit(): void {
    if(this._routed.snapshot.queryParamMap.has('prodCode')){
      this.prodCode = this._routed.snapshot.queryParamMap.get('prodCode')!;
    }
    this._list.getProductDetails(this.prodCode).subscribe(data => {
      this.productForm.setValue(data);
    });

    this.productForm =  this._fb.group({ 
      productCategory: [``],
      productName: [``,[Validators.required]],
      productCode: [``, [Validators.required]],
      productColor: [``, Validators.required],
      prodDescription: [``, [Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
      price: [``, [Validators.required, PriceValidator.checkNumber]],
      inStockQuantity: [``, [Validators.required, Validators.min(1)]],
      imageUrl: [``, [Validators.required]]
    })
  }

  submit(){
    if(this.productForm.valid){
      this._route.navigate(['/product']);
    }
  }

  routeBack(){
    this._route.navigate(['/product']);
  }

}
