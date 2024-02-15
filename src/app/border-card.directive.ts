import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor : string = 'lightgrey';
  private defaultColor : string = 'red';
  private defaultHeight : number = 220;

  constructor(private el:ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('appBorderCard') borderColor : string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('lightgrey');
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

  private setHeight(h: number){
    this.el.nativeElement.style.height = `${h}px`;
  }

}
