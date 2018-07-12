import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text = 'Click Me! to change color using "mycolor" directive.';

  onClick(value) {
    this.text=value;
  }
}
