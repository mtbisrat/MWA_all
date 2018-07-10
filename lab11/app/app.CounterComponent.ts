import { Component, Input, Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <p>
      <button (click)="onDec()">-</button><span>{{counterValue}}</span><button (click)="onInc()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnChanges {

  @Input('counter')counter:number;

  @Output()counterChange=new EventEmitter<number>();

  counterValue:number=0;

  constructor() { 
  }

  onDec(){
    this.counterChange.emit(--this.counter);
  }
  onInc(){
    this.counterChange.emit(++this.counter);
  }

  ngOnChanges(){
    this.counterValue=this.counter;
  }

}