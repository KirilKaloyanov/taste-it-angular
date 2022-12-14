import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeService } from './recipes.service';
import { RecipesComponent } from './recipesComponent/recipes.cmpt';
import { RecipeDetailsComponent } from './recipeDetailsComponent/recipeDetails.cmpt';
import { RecipesFilterComponent } from './recipesFilterComponent/recipesFilter.cmpt';
import { RecipeCommentComponent } from './recipeCommentComponent/recipeComment.cmpt';
import { UsersService } from '../users/users.service';
import { FormsModule } from '@angular/forms';
import { RecipeLikeComponent } from './recipeLikeComponent/recipeLike.cmpt';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'recipes', component: RecipesComponent },
      { path: 'recipes/:id', component: RecipeDetailsComponent },
    ]),
  ],
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipesFilterComponent,
    RecipeCommentComponent,
    RecipeLikeComponent
  ],
  providers: [RecipeService, UsersService],
  exports: [],
})
export class RecipesModule {}
