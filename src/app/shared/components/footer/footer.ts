import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  // Dynamic year generation for copyright
  currentYear: number = new Date().getFullYear();

  constructor() {}
}