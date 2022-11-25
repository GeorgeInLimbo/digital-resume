// The ResumeComponent is pulling information from the JobHistory, which I am using to hold information from
// previous roles in different companies inluding supervisors, start and end dates, responsibilities I had
// for each position that I held. 

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
