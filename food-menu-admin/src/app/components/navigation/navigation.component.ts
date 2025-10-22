import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private authService: AuthService) {}

//   isLoggedIn = false;

//   logout() {
//     console.log("User logged out");
//   }

  isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
      }

      logout(): void {
        this.authService.logout();
//         this.router.navigate(['/login']);
      }
}
