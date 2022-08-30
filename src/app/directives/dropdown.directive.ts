import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: '[dropDown]'
})


export class DropDownDirective{
    @Input()
    condition:boolean = false;

    constructor(private renderer: Renderer2, private el:ElementRef){

    }

    ngOnChanges(){
        if(this.condition){
            this.renderer.addClass(this.el.nativeElement, 'dropDown-active');
            console.log("class added : " + this.el.nativeElement);
            
        }
        else{
            this.renderer.removeClass(this.el.nativeElement, 'dropDown-active');
            console.log("class removed : " + this.el.nativeElement);
            
        }
            
    }
}