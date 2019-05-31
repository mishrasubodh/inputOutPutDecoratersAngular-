import { Directive,ElementRef,HostListener,Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appParent]'
})
export class ParentDirective {
  @HostBinding('style.color')private color: 'gray';
  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) {  }

@HostListener("mouseover",['$event']) onMouseOver(eventPass) {
 //console.log("mouseovereEvent",eventPass);
//console.log("this.el.nativeElement",this.el);
   this.renderer.setStyle(this.el.nativeElement, 'background-color', '#6363a3');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'rgb(138, 29, 7)');
  }
}

//<----------------------------child directive----------------------------------->

@Directive({
  selector: '[childdirective]'
})
export class childdirective {
  @HostBinding('style.color')private color: 'gray';
  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) {  }
@HostListener("mouseover",['$event']) onMouseOver(eventPass) {
console.log("this.el.nativeElement",this.el);
   this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgray'); 
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#303036');
  }
}
