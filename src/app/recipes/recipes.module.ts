import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeService } from './recipes.service';
import { RecipesComponent } from './recipesComponent/recipes.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [RecipesComponent],
  providers: [RecipeService],
  exports: [RecipesComponent],
})
export class RecipesModule {}
