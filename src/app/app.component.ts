import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = signal('App works!');

  constructor() {}
}
