import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  .container {
    color: blue;
  }
  `],
})
export class AppComponent {
  name = 'vince';
}
