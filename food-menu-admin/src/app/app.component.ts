import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-menu-admin';
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.url === '/home';
        console.log('Current route:', this.router.url, 'Is home page:', this.isHomePage);
      }
    });
  }

  get shouldShowNavbar(): boolean {
      const hiddenRoutes = ['/login', '/register', '/password-reset'];
      return !hiddenRoutes.includes(this.router.url);
    }
}
