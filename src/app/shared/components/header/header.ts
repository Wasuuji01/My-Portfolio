import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // angular module for ngClass

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // ✅ COMMONMODULE IS IMPORTANT for ngClass
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  // ✅ Create a variable to track the state of the mobile menu
  menuOpen: boolean = false;

  // ✅ Add a function to toggle the menu (Open -> Close, Close -> Open)
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}