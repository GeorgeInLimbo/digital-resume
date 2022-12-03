// The ResumeComponent is pulling information from the JobHistory, which I am using to hold information from
// previous roles in different companies inluding supervisors, start and end dates, responsibilities I had
// for each position that I held. 

import { Component, Input } from '@angular/core';
import { Jobs } from '../job-interfaces';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent {

  @Input() occupation?: Jobs;

}