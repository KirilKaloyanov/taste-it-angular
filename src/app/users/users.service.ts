import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { apiEndpoint } from '../shared/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  host = apiEndpoint;
  // private loggedInUser$ = new BehaviorSubject<{username: string} | null>(null);

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http
      .post<any>(this.host + '/auth', user)
      .pipe(tap((response) => {
        if (response.token) {
          this.setUser(response.token);
          // this.loggedInUser$.next(user.username);
        } 
      }));
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
  }

  // public getLoggedUser(): Observable<{username: string} | null> {
  //   return this.loggedInUser$;
  // }

  getUsername(): null | string {
    return sessionStorage.getItem('username');
  }

  setUser(token: string) {
    const user: {username: string, _id: string} = jwtDecode(token);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('userId', user._id);
  }
}
