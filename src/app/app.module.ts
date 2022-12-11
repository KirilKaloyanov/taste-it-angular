import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/user.module';

import { AppComponent } from './app.cmpt';
import { HomeComponent } from './homeComponent/home.cmpt';
import { NavbarComponent } from './navbarComponent/navbar.cmpt';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    HttpClientModule,
    RecipesModule,
    UsersModule,
  ],
  providers: [], //RecipeService
  bootstrap: [AppComponent],
})
export class AppModule {}
