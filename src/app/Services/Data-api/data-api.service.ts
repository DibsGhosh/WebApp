import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";


export class DataService implements InMemoryDbService{
    createDb(){
        return {
            Employee: [] = [
                {ecode: 1,firstName:"Roshan", middleName: "", lastName: "Singh", address1:"IND", address2:"Delhi", gender:"Male", userType:"Permanent", salary:10000, pincode:123456, actions:null},
                {ecode: 2,firstName:"Sunil", middleName: "Kumar", lastName: "Sen", address1:"IND", address2:"Kolkata", gender:"Male", userType:"Contractual", salary:1500, pincode:637452, actions:null},
                {ecode: 3,firstName:"Sima", middleName: "Das", lastName: "Gupta", address1:"IND", address2:"Kolkata", gender:"Female", userType:"Permanent", salary:15000, pincode:637112, actions:null},
                {ecode: 4,firstName:"Rohan", middleName: "", lastName: "Desai", address1:"IND", address2:"Vishakapatnam", gender:"Male", userType:"Contractual", salary:1000, pincode:476543, actions:null},
                {ecode: 5,firstName:"Rahim", middleName: "", lastName: "Sheikh", address1:"IND", address2:"Hyderabad", gender:"Male", userType:"Permanent", salary:15000, pincode:567431, actions:null},
                {ecode: 6,firstName:"Srestha", middleName: "", lastName: "Rawat", address1:"IND", address2:"Hyderabad", gender:"Female", userType:"Permanent", salary:12000, pincode:567455, actions:null},
                {ecode: 7,firstName:"Priti", middleName: "", lastName: "Singh", address1:"IND", address2:"Delhi", gender:"Female", userType: "Contractual", salary:1700, pincode:123546, actions:null},
                {ecode: 8,firstName:"Sunidhi", middleName: "", lastName: "Jaiswal", address1:"IND", address2:"Gujrat", gender:"Female", userType:"Permanent", salary:11000, pincode:342156, actions:null},
                {ecode: 9,firstName:"Rajesh", middleName: "Kumar", lastName: "Kundu", address1:"IND", address2:"Kolkata", gender:"Male", userType:"Permanent", salary:10000, pincode:637112, actions:null},
                {ecode: 10,firstName:"Raima", middleName: "", lastName: "Kaur", address1:"IND", address2:"Punjab", gender:"Female", userType:"Contractual", salary:1000, pincode:652189, actions:null},
        
            ],
            ProductList: []=[
                {productCategory: "Electronics", productName: "tv", productColor:"black", productCode:'e123', inStockQuantity:20, price:30000, prodDescription:"latest model", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Electronics", productName: "fridge", productColor:"grey",   productCode:'e323', inStockQuantity:10, price:45000, prodDescription:"fast cooling", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Fashion", productName: "adidas", productColor:"black",  productCode:'f123', inStockQuantity:12, price:55000, prodDescription:"latest fashion", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Fashion", productName: "puma", productColor:"pink", productCode:'f2123',inStockQuantity:20, price:52000, prodDescription:"Newest release", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Food",productName: "Chocolate", productColor:"black",  productCode:'m123', inStockQuantity:2, price:40000, prodDescription:"Delightful", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Food",productName: "Syrup", productColor:"white",  productCode:'e223',  inStockQuantity:3, price:30000, prodDescription:"Sweet as Sugar", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Book", productName: "maths", productColor:"white",  productCode:'b123', inStockQuantity:20, price:4000, prodDescription:"3rd edition", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" },
                {productCategory: "Book",productName: "science", productColor:"black", productCode:'b323', inStockQuantity:30, price:5000, prodDescription:"2nd edition", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" }
            
            ]

        };
    }
    
}