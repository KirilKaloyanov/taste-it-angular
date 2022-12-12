import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
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
    AuthGuard
  ], //RecipeService
  bootstrap: [AppComponent],
})
export class AppModule {}
