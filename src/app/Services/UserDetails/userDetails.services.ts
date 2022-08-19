import { Injectable } from "@angular/core";

@Injectable()

export class UserDetailsServices{
    isLoggedin:boolean=false;
    userDetail = [
        {
            userName:"admin",
            password:"admin"
        }
    ]

    validate(username:string, Password:string):boolean{
        if(this.checkUsername(username)){
        if(this.userDetail.find(e => e.userName === username)?.password === Password){
            this.isLoggedin=true;
            return true;
        }
        else
            return false;
        }
        else{
            return false;
        }
    }

    checkUsername(username:string){
        if(this.userDetail.find(e => e.userName === username) == undefined){
            return false;
        }
        else{
            return true;
        }
    }

    registerUser(username:string, Password:string){
        if(this.checkUsername(username)){
            return false;
        }
        else{
            this.userDetail.push({userName:username, password:Password});
            this.isLoggedin=true;
            return true;
        }
    }
}