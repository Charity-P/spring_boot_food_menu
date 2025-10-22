import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient) {}

    getUser(username: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/${username}`);
    }

    updateUser(username: string, userData: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${username}`, userData);
    }

    deleteUser(username: string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${username}`);
    }
//     private baseUrl = 'http://localhost:8080/api';
//
//     constructor(private http: HttpClient) {}
//
//     getUser(username: string): Observable<any> {
//       return this.http.get(`${this.baseUrl}/${username}`);
//     }
//
//     updateUser(username: string, updatedUser: any): Observable<any> {
//       return this.http.put(`${this.baseUrl}/${username}`, updatedUser);
//     }
//
//     deleteUser(username: string): Observable<any> {
//       return this.http.delete(`${this.baseUrl}/${username}`);
//     }
}
