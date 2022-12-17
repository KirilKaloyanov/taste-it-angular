import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/user.module';

import { AppComponent } from './app.cmpt';
import { HomeComponent } from './homeComponent/home.cmpt';
import { NavbarComponent } from './navbarComponent/navbar.cmpt';
import { TokenInterceptor } from './shared/interceptors/tokenInterceptor';
import { AuthGuard } from './shared/guards/authGuard';
import { NotFoundComponent } from './notFoundComponent/not-found.component';
import { ErrorComponent } from './errorComponent/error.cmpt';
import { ErrorsInterceptor } from './shared/interceptors/errorsInterceptor';
import { ResponseInterceptor } from './shared/interceptors/responseInterceptor';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, NotFoundComponent, ErrorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', component: NotFoundComponent },
  ]),
    HttpClientModule,
    RecipesModule,
    UsersModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    AuthGuard,
    UsersService
  ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
