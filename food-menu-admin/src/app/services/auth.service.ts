import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

//   constructor(private http: HttpClient, private router: Router) {}
  constructor(private http: HttpClient, private injector: Injector) {}

  private get router(): Router {
    return this.injector.get(Router);
  }


  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: { username: string; password: string; email: string; fullName: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/password-reset`, { email });
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  saveToken(token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:8080/api/auth'; // Adjust as needed
//
//   constructor(private http: HttpClient, private router: Router) {}
//
//   login(credentials: { username: string; password: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, credentials);
//   }
//
//   register(user: {
//     username: string;
//     password: string;
//     email: string;
//     fullName: string;
//   }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user);
//   }
//
//   logout(): void {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     this.router.navigate(['/login']);
//   }
//
//   saveToken(token: string, username: string): void {
//     localStorage.setItem('token', token);
//     localStorage.setItem('username', username);
//   }
//
//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }
//
//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }
//
// }
