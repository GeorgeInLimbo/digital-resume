import { Component } from '@angular/core';
import { ContactInfo } from '../interfaces';

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

  summary = 'A self-motivated Angular developer looking to utilize my strong foundation of technical knowledge to contribute to a team of other motivated professionals. I enjoy a fast-paced work environment and finding solutions to challenging problems.'

  constructor() { }

}
