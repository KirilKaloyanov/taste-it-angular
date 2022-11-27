import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeService } from './recipes.service';
import { RecipesComponent } from './recipesComponent/recipes.cmpt';
import { RecipeDetailsComponent } from './recipeDetailsComponent/recipeDetails.cmpt';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'recipes', component: RecipesComponent },
      { path: 'recipes/:id', component: RecipeDetailsComponent },
    ]),
  ],
  declarations: [RecipesComponent, RecipeDetailsComponent],
  providers: [RecipeService],
  exports: [RecipesComponent],
})
export class RecipesModule {}
