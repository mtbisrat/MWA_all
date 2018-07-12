import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {

  @Input('myvisibility') isShow: boolean=false;
  constructor(private e: ElementRef, private r: Renderer) {

   }

   ngOnInit(){

    console.log(this.isShow);
    if(this.isShow==false){
      this.r.setElementStyle(this.e.nativeElement, 'visibility', 'hidden');
    }
    else{
      this.r.setElementStyle(this.e.nativeElement, 'visibility', 'visible');
    }
  }
}
