import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['farmDetails']">Famers Market</a> 
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
