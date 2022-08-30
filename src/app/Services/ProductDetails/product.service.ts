import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { IProduct } from "src/app/model/productInterface/product.interface";

@Injectable()

export class ProductService{

    productUrl:string = 'api/ProductList';
    products:any;

    constructor(private _http:HttpClient) {}

    // ProductList:IProduct[]=[
    //     {productCategory: "Electronics", productName: "tv", productColor:"black", productCode:'e123', inStockQuantity:20, price:30000, prodDescription:"latest model", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Electronics", productName: "fridge", productColor:"grey",   productCode:'e323', inStockQuantity:10, price:45000, prodDescription:"fast cooling", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Fashion", productName: "adidas", productColor:"black",  productCode:'f123', inStockQuantity:12, price:55000, prodDescription:"latest fashion", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Fashion", productName: "puma", productColor:"pink", productCode:'f2123',inStockQuantity:20, price:52000, prodDescription:"Newest release", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Food",productName: "Chocolate", productColor:"black",  productCode:'m123', inStockQuantity:2, price:40000, prodDescription:"Delightful", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Food",productName: "Syrup", productColor:"white",  productCode:'e223',  inStockQuantity:3, price:30000, prodDescription:"Sweet as Sugar", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Book", productName: "maths", productColor:"white",  productCode:'b123', inStockQuantity:20, price:4000, prodDescription:"3rd edition", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
    //     {productCategory: "Book",productName: "science", productColor:"black", productCode:'b323', inStockQuantity:30, price:5000, prodDescription:"2nd edition", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" }
    
    // ];

    getProductsByApi():Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this.productUrl)
     }

    // getProductList(){
    //     return this.ProductList;
    // }

    getProductDetails(code:string):Observable<IProduct>{
        let subject= new ReplaySubject<IProduct>();
     this._http.get<IProduct[]>(this.productUrl).subscribe((data)=>{
     this.products= data.find(x=>x.productCode==code);
   subject.next(this.products);
   subject.complete();
    });
return subject;
    }

}