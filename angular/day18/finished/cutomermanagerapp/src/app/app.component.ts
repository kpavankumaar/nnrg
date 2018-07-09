import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ravi';
  srcpath = 'favicon.ico';
  color = 'red';
  username = 'Ravi';
  // inputFieldValue = '';
  changeColor() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }
}
