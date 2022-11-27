import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeService } from './recipes.service';
import { RecipesComponent } from './recipesComponent/recipes.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RecipesComponent],
  providers: [RecipeService],
  exports: [RecipesComponent],
})
export class RecipesModule {}
