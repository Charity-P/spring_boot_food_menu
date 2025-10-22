import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, MessageModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  onRegister(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.isFormInvalid()) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.authService.register({
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password,
    }).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (error) => {
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Registration failed. Please try again later.';
        }
      },
    });
  }

  isFormInvalid(): boolean {
    return !this.fullName.trim() || !this.email.trim() || !this.username.trim() || !this.password.trim();
  }

}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
// import { MessageModule } from 'primeng/message';
//
// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, MessageModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   fullName = '';
//   email = '';
//   username = '';
//   password = '';
//   errorMessage = '';
//   successMessage = '';
//
//   constructor(private authService: AuthService, private router: Router) {}
//
//   onRegister(): void {
//     this.errorMessage = ''; // Reset error message before a new request
//     this.successMessage = '';
//     console.log("User registered successfully!");
//
//     this.authService.register({
//       fullName: this.fullName,
//       email: this.email,
//       username: this.username,
//       password: this.password,
//     }).subscribe({
//       next: () => {
//         this.successMessage = 'Registration successful! Redirecting to login...';
//         setTimeout(() => this.router.navigate(['/login']), 2000); // Redirect after 2 seconds
//       },
//       error: (error) => {
//         console.error('Registration error:', error); // Debugging
//
//         if (error.error && error.error.message) {
//           const errorMessage = error.error.message.toLowerCase(); // Convert to lowercase to avoid case mismatch
//
//           if (errorMessage.includes('email already exists')) {
//             this.errorMessage = 'This email is already in use. Try another.';
//           } else if (errorMessage.includes('username is taken')) {
//             this.errorMessage = 'This username is already taken. Please choose another one.';
//           } else if (errorMessage.includes('invalid email')) {
//             this.errorMessage = 'Please enter a valid email address.';
//           } else if (errorMessage.includes('password too weak')) {
//             this.errorMessage = 'Your password is too weak. Try using a mix of letters, numbers, and symbols.';
//           } else {
//             this.errorMessage = 'Registration failed. Please try again later.';
//           }
//         } else {
//           this.errorMessage = 'An unexpected error occurred. Please try again.';
//         }
//       }
//     });
//   }
// }
