// With all your functionality for a component saved in one spot makes it easy to make adjustments to functions 
// or properties. It is also to understanding the nature of each compenent with Angular's decorator syntax and 
// to track parent class/child class relationships. 

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital-resume';
  constructor() { }
}
