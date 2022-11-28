import { Component } from '@angular/core';
import { JobHistory } from '../job-history';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent {
  occupations = JobHistory;
}