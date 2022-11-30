// In the Skills Component, I define properties for the certifications that I've earned, as well as create
// arrays for my skillsets, interests, and references. Because my references property requires more detailed
// information, it was appropriate that I use an array of objects so that I can assign relevant key-value
// pairing that I can utilize in my digital-resume application.  

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent {

  constructor() { }

  certifications: string[] = [
    'Enrolled Agent',
    'Notary Public'
  ];

  skills: string[] = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'HTML5',
    'CSS'
  ]

  references = [
    {
      name: 'Jake Smith',
      relationship: 'Friend, Full Stack Developer',
      contact: '(303) 885-9035'
    },
    {
      name: 'Dr. Terry LaValley',
      relationship: 'Former Principal',
      contact: '(303) 431-6926'
    }
  ]
}
