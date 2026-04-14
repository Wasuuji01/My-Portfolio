import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  statusIcon: string;
  statusText: string;
  topIcon: string;
  titleIcon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  
  projects: Project[] = [
    {
      title: 'WS-Mart',
      description: 'Full-stack e-commerce website developed using Java (Spring Boot, Hibernate, JPA) for backend, MySQL for database, and frontend technologies.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS'],
      statusIcon: '🎓',
      statusText: 'Academic/Self-Learned',
      topIcon: '🛒', // You can replace with FontAwesome/SVG Cart icon
      titleIcon: '🏪'
    },
    {
      title: 'CareFinder',
      description: 'A comprehensive healthcare platform designed to streamline medical services, patient care management, and doctor consultations with real-time connectivity.',
      techStack: ['HTML5', 'Angular', 'Ionic', 'Firebase'],
      statusIcon: '📅',
      statusText: 'In Progress | 👨‍💼 Professional',
      topIcon: '💻', // Laptop Code icon
      titleIcon: '🧰'
    },
    {
      title: 'E-commerce API',
      description: 'Robust RESTful API for e-commerce applications with product management, user authentication, order processing, and payment integration.',
      techStack: ['Java', 'Spring Boot', 'REST API', 'JPA'],
      statusIcon: '📅',
      statusText: 'In Progress | 📜 Certification Project',
      topIcon: '🌿', // Git/Branch/Network icon
      titleIcon: '🗄️'
    }
  ];

  constructor() {}
}