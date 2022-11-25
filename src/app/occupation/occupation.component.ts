import { Component, Input } from '@angular/core';
import { Jobs } from '../interfaces';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent {
  @Input() occupation?: Jobs; // OccupationComponent is a child component of ResumeComponent.

  displayDuties = false;
  displaySupervisors = false;

  constructor() { }

  showDuties(): void {
    this.displayDuties = true;
    this.displaySupervisors = false;
  }

  showSupervisors(): void {
    this.displaySupervisors = true;
    this.displayDuties = false;
  }

  collapse(): void {
    this.displayDuties = false;
    this.displaySupervisors = false;
  }

}
