import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeService } from './recipes.service';
import { RecipesComponent } from './recipesComponent/recipes.cmpt';
import { RecipeDetailsComponent } from './recipeDetailsComponent/recipeDetails.cmpt';
import { RecipesFilterComponent } from './recipesFilterComponent/recipesFilter.cmpt';
import { UserRecipes } from './userRecipes/userRecipesComponent/userRecipes.cmpt';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'recipes', component: RecipesComponent },
      { path: 'recipes/:id', component: RecipeDetailsComponent },
      { path: 'recipes/user/:userId', component: UserRecipes },
    ]),
  ],
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipesFilterComponent,
    UserRecipes
  ],
  providers: [RecipeService],
  exports: [],
})
export class RecipesModule {}
