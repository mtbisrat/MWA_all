import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']

   template: `
    <counter [counter]="componentCounterValue" (counterChange)=onCounterChange($event)></counter>
  `,
  styles: []
})
export class AppComponent {
  componentCounterValue:number=5;
  title = 'app';

  onCounterChange(val:number){
    this.componentCounterValue=val;
  }
}