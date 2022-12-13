import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { RecipeService } from 'src/app/recipes/recipes.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor{
    constructor(private router: Router, private recipeService:RecipeService){
        console.log('1.Interceptor constructor');
    }
    errror$$ = this.recipeService.error$$;
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('2.Intercept method');
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            if (err.error.message == 'Recipe not found' ) {
                console.log('3.Intercept if');
                this.errror$$.next(err);
                this.router.navigate(['/error']);
            }
            return throwError(() => err);
        }))
    }

    // getError() {
    //     return this.error$$;
    // }
}