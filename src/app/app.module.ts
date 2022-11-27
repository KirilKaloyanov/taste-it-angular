import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';
// import { RecipeService } from './recipes.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RecipesModule],
  providers: [], //RecipeService
  bootstrap: [AppComponent],
})
export class AppModule {}
