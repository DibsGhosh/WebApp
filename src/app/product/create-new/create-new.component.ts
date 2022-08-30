import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PriceValidator } from 'src/app/validators/price.validator';
import { UrlValidator } from 'src/app/validators/url.validator';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  productForm!:FormGroup;
  constructor(private _fb:FormBuilder, private _route:Router) { }

  ngOnInit(): void {
    this.productForm =  this._fb.group({
      productCategory: [""],
      productName: ['',[Validators.required]],
      productCode: ['', [Validators.required]],
      productColor: ['', Validators.required],
      prodDescription: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
      price: ['', [Validators.required, PriceValidator.checkNumber]],
      inStockQuantity: ['', [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, UrlValidator.checkUrl]]
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
