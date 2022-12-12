import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users/users.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usersService: UsersService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.usersService.getToken();

    return next.handle(
      req.clone({
        setHeaders: {
          ['x-auth-token']: `${token}`,
          ['Content-Type']: 'application/json',
        },
      })
    );
  }
}
