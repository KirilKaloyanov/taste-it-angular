import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';

import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/user.module';

import { AppComponent } from './app.cmpt';
import { HomeComponent } from './homeComponent/home.cmpt';
import { NavbarComponent } from './navbarComponent/navbar.cmpt';
import { TokenInterceptor } from './shared/interceptors/tokenInterceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    HttpClientModule,
    RecipesModule,
    UsersModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ], //RecipeService
  bootstrap: [AppComponent],
})
export class AppModule {}
