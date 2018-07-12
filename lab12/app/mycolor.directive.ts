import { Directive, ElementRef, Renderer, HostListener, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  colors:string[];
  @Output() onClick=new EventEmitter<string>();
  constructor(private e: ElementRef, private r: Renderer) {
    this.colors = ['red', 'green', 'blue'];
   }

   // To Listen to Events that are triggered by client
  @HostListener('click') foo(){ 
    let randNum:number = this.getRandomInt(0,2);
    console.log(randNum);
    let color:string=this.colors[randNum]; 
    this.e.nativeElement.style.color = color;
    this.onClick.emit(color);
  }
  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
