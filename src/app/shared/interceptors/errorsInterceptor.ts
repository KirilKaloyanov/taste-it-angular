import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { RecipeService } from 'src/app/recipes/recipes.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private router: Router, private recipeService: RecipeService) {
    console.log('1.Interceptor constructor');
  }
  errror$$ = this.recipeService.error$$;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('2.Intercept method');
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('3.Intercept method catch error');

        if (err.status == 401) {
          this.router.navigate(['/login']);
        }

        if (
          err.error.message != 'Invalid username or password' &&
          err.error.errors.username.message != 'Username is already registered'
        ) {
          console.log('4.Intercept if invalid username | password');
          this.errror$$.next(err.error.message);
          this.router.navigate(['/error']);
        }

        return throwError(() => err);
      })
    );
  }

  // getError() {
  //     return this.error$$;
  // }
}
