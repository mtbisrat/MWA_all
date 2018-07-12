import { Component, ViewEncapsulation } from '@angular/core';
//import {ngFor} from  '@angular/common'; 
@Component({
  selector: 'app-my-comp',
  template: `
    <ul>
      <li *ngFor="let item of items"> {{item}} </li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyCompComponent{

  public items: string[];
  constructor() { 
    this.items=['Mana', 'Senait', 'Michael'];
  }
}
