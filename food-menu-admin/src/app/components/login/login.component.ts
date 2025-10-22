import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, MessageModule, CheckboxModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token, response.username);


        if (this.rememberMe) {
          localStorage.setItem('rememberedUsername', this.username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }

        this.router.navigate(['/home']);
      },
      error: (error) => {
        if (error.error.message === 'User not found') {
          this.errorMessage = 'User Not Found';
        } else if (error.error.message === 'Incorrect password') {
          this.errorMessage = 'Incorrect username or password';
        } else {
          this.errorMessage = 'Login failed. Check your credentials.';
        }
      },
    });
  }

  isValidLogin(): boolean {
      return !this.username.trim() || !this.password.trim();
  }

  onForgotPassword(): void {
    this.router.navigate(['/password-reset']);
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
// import { MessageService } from 'primeng/api';
//
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, MessageModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username = '';
//   password = '';
//   errorMessage = '';
//
//   constructor(private authService: AuthService, private router: Router) {}
//
//   onLogin(): void {
//     this.authService.login({ username: this.username, password: this.password }).subscribe({
//       next: (response) => {
//         this.authService.saveToken(response.token, response.username);
//         this.router.navigate(['/home']);
//       },
//       error: (error) => {
//         this.errorMessage = error.error.message || 'Login failed. Check your credentials.';
//       },
//     });
//   }
// }
