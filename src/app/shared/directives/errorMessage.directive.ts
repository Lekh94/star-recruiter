import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[errorMessage]'
})

export class ErrorMessageDirective {

    constructor(private element: ElementRef) {
        
        this.errorMessage();
    }

    @Input('event') event:any;

    errorMessage() {        
        const parent = this.element.nativeElement.parentNode;
        const child = document.createElement('div');
        child.innerHTML = '<div class="error-msg mt-1"><i nz-icon nzType="close-circle" nzTheme="outline" class="align-middle mr-1"></i> kk</div>';
        parent.appendChild(child);
    } 
}