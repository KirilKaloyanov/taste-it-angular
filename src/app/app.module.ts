import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponent/home.component';
import { NavbarComponent } from './navbarComponent/navbar.component';
// import { RecipeService } from './recipes.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RecipesModule],
  providers: [], //RecipeService
  bootstrap: [AppComponent],
})
export class AppModule {}
