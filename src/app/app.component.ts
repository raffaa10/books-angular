import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-management';

  x = 10;
  y = 20;
  add(x, y): number{
    return x + y;
  }
}
