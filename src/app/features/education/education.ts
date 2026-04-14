import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent {
  
  timelineData: TimelineItem[] = [
    {
      title: 'Bachelor of Computer Application (BCA)',
      subtitle: 'Graduated in 2025',
      description: 'Building Scalable Solutions with Java & Angular. I am a Full-Stack Developer passionate about creating high-impact web and mobile applications using Spring Boot, Ionic, and Firebase. Let\'s transform your ideas into innovative digital products.',
      icon: '🎓' // Aap isko FontAwesome ya SVG se replace kar sakte hain
    },
    {
      title: 'Java Full-Stack Development',
      subtitle: 'CETPA Infotech Pvt. Ltd.',
      description: 'Hands-on training in backend, frontend, and database technologies for building end-to-end web applications. Specializing in Java ecosystem.',
      icon: '⚙️'
    },
    {
      title: 'Intermediate',
      subtitle: 'Completed',
      description: 'Completed intermediate education with focus on science and mathematics, laying foundation for technical career.',
      icon: '🏫'
    },
    {
      title: 'High School',
      subtitle: 'Completed',
      description: 'Completed high school education with distinction, developing analytical and problem-solving skills.',
      icon: '🎒'
    }
  ];

  constructor() {}
}