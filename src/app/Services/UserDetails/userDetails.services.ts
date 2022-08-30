import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IUser } from "src/app/model/userInterface/user.interface";

@Injectable()

export class UserDetailsServices{
    isLoggedin$ = new Subject<boolean>();
    loggedInUser$ = new Subject<string>();
    // isLoggedin:boolean=false;
    userDetail:IUser[] = [
        {
            userName:"Dibs1000",
            password:"12345",
            firstName:"Dibyendu",
            lastName:"Ghosh"
        },

        {
            userName:'s.123',
            password:'12345',
            firstName: 'Sunil',
            lastName: 'Paul'
        },
        {
            userName: 'A@123',
            password: '12345',
            firstName: 'Anirudh',
            lastName: 'Dey'
        }

    ]

    validate(username:string, Password:string):boolean{
        if(this.checkUsername(username)){
        if(this.userDetail.find(e => e.userName === username)?.password === Password){
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
            this.userDetail.push({userName:username, password:Password, firstName:'', lastName:''});
            return true;
        }
    }

    sendName(userName:string){
       let val =  this.userDetail.find(e=> e.userName === userName);
       return {
        firstName : val?.firstName,
        lastName : val?.lastName
       };
    }
}