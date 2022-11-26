

import { Component } from '@angular/core';
import { JobHistory } from '../job-history';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent {

  occupations = JobHistory;


  constructor() { }

  // After the constructor of the ResumeComponent class, I have some simple functionality to display my 
  // responsibilities, or my supervisors, with each role, with an added option to remove the information. 
  // This helps keep the UI clean and provides some light functionality. 



}
