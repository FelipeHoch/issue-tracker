import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { 
    this.setBackgroundColor('#0072a3');
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'all 0.5s');

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('#0072a3');
  }

}
