import { AbstractControl } from "@angular/forms";


export class PriceValidator{

    static checkNumber(control:AbstractControl): {[key:string]:boolean} | null{
        if(Number(control.value)){
            return null;
        }
        else{
            return {'NotANumber' : true};
        }     

    }
}