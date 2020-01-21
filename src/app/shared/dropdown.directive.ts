import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isClicked:boolean = false

  @HostBinding('class.open') isOpen = false;

  // @HostListener('click')
  // click()
  // {
  //     this.isClicked = !this.isClicked
  //     if(this.isClicked)
  //     {
  //       this.renderer.addClass(this.element,'open');
  //     }

  //     else{
  //       this.renderer.removeClass(this.element,'open')
  //     }
     
  // }

  // @HostListener('click') toggle()
  // {
  //   this.isOpen=!this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private element: ElementRef,private renderer:Renderer2) { }

}
