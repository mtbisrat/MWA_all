import { Component } from '@angular/core';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h1>Data Driven Form</h1>
      <user-form></user-form>
      <hr>
    </div>
  </div>
  </div>
  `,
  styles: [],
  providers:[UserInfoService]
})
export class AppComponent {
  title = 'app';
}
