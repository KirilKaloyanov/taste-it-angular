import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { apiEndpoint } from '../shared/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  host = apiEndpoint;
  private loggedInUser$ = new BehaviorSubject<{username: string} | null>(null);

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http
      .post<any>(this.host + '/auth', user)
      .pipe(tap((response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.loggedInUser$.next(user.username);
        } 
      }));
  }

  public getLoggedUser(): Observable<{username: string} | null> {
    return this.loggedInUser$;
  }
}
