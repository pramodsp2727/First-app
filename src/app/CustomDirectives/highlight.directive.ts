import { Directive, ElementRef, Input, Renderer2, booleanAttribute } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') condition!: boolean
  constructor(private ren:Renderer2,private el:ElementRef) {
     
   }

   ngOnInit(){
    console.log("condition is ", this.condition)
    if(this.condition){
      this.ren.addClass(this.el.nativeElement,'bg-primary')
    }else
    this.ren.addClass(this.el.nativeElement,'bg-secondary')
   }

}
