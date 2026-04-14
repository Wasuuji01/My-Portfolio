import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 

// Shared Components (Header & Footer)
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';

// All Feature Sections
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { ProjectsComponent } from './features/projects/projects'; 
import { EducationComponent } from './features/education/education';
import { ContactComponent } from './features/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  // Yahan sabhi components ka hona bohot zaroori hai
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // Aapke structure me iska naam app.scss hai
})
export class AppComponent {
  title = 'portfolio'; 
}