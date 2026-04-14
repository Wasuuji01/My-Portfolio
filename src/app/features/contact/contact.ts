import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'; // EmailJS import kiya

@Component({
  selector: 'app-contact',
  standalone: true,
  imports :[ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isLoading = false; // Loading state add kiya

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initializing the Reactive Form with validations
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true; // Button ko disable aur 'Sending...' set karega

      // EmailJS ko form ka data pass karne ke liye object banaya
      const templateParams = {
        from_name: this.contactForm.value.fullName,
        from_email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        to_name: 'Mohd Waseem' // Ye aapka naam hai jo email me jayega
      };

      try {
        // YAHAN APNI KEYS DAALEN (Step 1 se)
        await emailjs.send(
          'service_0odm9qf',   // Example: service_abc123
          'template_ohlj15k',  // Example: template_xyz789
          templateParams,
          'K6VQ8Og340-qTMKtk'    // Example: aBcDeFgHiJkLmNoP
        );

        console.log('Email sent successfully!');
        this.contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
        
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong. Please try again later.');
      } finally {
        this.isLoading = false; // Loading complete
      }

    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}