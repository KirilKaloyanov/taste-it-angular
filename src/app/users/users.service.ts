import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { apiEndpoint } from '../shared/apiEndpoint';

@Injectable()
export class UsersService {
  host = apiEndpoint;
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http
      .post<any>(this.host + '/auth', user)
      .pipe(tap((response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('username', user.username);
        } 
      }));
  }
}
