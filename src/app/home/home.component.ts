import { Component } from '@angular/core';
import { ContactInfo } from '../job-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contactInfo: ContactInfo = {
    name: 'George A. Clam',
    email: 'gclam77@gmail.com',
    phoneNumber: '(720) 926-2671',
    location: 'Erie, CO'
  }

  constructor() { }

}
