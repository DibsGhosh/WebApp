import { AbstractControl } from "@angular/forms";


export class UrlValidator{
    static checkUrl(control:AbstractControl) {
        const url:string = control.value;
        const domain:string = url.substring(url.lastIndexOf('.'), url.length);
        if(domain === '.com'){
            return null
        }
        else
            return {"InvalidUrl" : true}
    }
}