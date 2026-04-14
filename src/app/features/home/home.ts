import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  // Yahan hum baad me resume download karne ka function ya 
  // contact button ke click events handle kar sakte hain.
  constructor() {}
}