import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  email = '';
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onPasswordReset() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    this.authService.resetPassword(this.email).subscribe({
      next: () => {
        this.successMessage = 'Password reset link sent! Check your email.';
      },
      error: () => {
        this.errorMessage = 'Failed to send reset link. Try again.';
      },
    });
  }
}
