import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
      <div class="row">
          <div class="col-12">
              <h1>Студенты</h1>
              <app-list></app-list>
          </div>
      </div>
  </div>`
})
export class AppComponent {
  title = 'hw1';
}
