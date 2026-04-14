import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  
  backendSkills = [
    { name: 'Java', progress: 90 },
    { name: 'Spring Boot', progress: 85 },
    { name: 'Hibernate & JPA', progress: 80 },
    { name: 'REST APIs', progress: 88 },
    { name: 'MySQL', progress: 92 }
  ];

  frontendSkills = [
    { name: 'HTML5', progress: 95 },
    { name: 'CSS3', progress: 90 },
    { name: 'Angular', progress: 88 },
    { name: 'Ionic', progress: 75 },
    { name: 'Firebase', progress: 85 }
  ];

  additionalSkills = [
    'Problem Solving', 
    'Time Management', 
    'Team Leadership', 
    'Project Management', 
    'Business Strategy'
  ];

  constructor() {}
}