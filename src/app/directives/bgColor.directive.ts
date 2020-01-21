import { element } from 'protractor';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';


@Directive({
    selector:'[bgColor]',
})
export class BGColor
{
    element:ElementRef;
    @Input() bgColoring:string = 'yellow';

    constructor(element:ElementRef,renderer:Renderer2)
    {
        this.element = element;
       // this.element.nativeElement.style.background = this.color;
       renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow');
    }

}