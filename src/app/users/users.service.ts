import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { apiEndpoint } from '../shared/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  host = apiEndpoint;

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http
      .post<any>(this.host + '/auth', user)
      .pipe(tap(response => this.setUser(response)
      ));
  }

  register(user: any) {
    return this.http
      .post<any>(this.host + '/users', user)
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
  }

  getUsername(): null | string {
    return sessionStorage.getItem('username');
  }
  getUserId(): null | string {
    return sessionStorage.getItem('userId');
  }
  getToken(): null | string {
    return sessionStorage.getItem('token');
  }

  setUser(response: any) {
    const user: {username: string, _id: string} = jwtDecode(response.token);
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('userId', user._id);
  }
}
