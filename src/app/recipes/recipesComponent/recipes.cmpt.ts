import { Component } from '@angular/core';
import { TRecipe } from 'src/app/shared/interfaces';

import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.cmpt.html',
})
export class RecipesComponent {
  recipes!: TRecipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // this.recipeService.getRecipes().then((recipes) => {
    //   this.recipes = recipes;
    //   console.log(this.recipes);
    // });
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.getRecipeLikesCount();
    });
  }

  getRecipeLikesCount() {
    this.recipes.map(function (r) {
      r.likes = r.likes.filter((rl) => rl.like === true);
      return r;
    });
  }
}
