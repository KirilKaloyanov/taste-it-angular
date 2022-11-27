import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes.service';

type tRecipe = {
  name: string;
};

@Component({
  selector: 'recipe',
  templateUrl: './recipeDetails.cmpt.html',
})
export class RecipeDetailsComponent {
  recipe: tRecipe | any = {};

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getSingleRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
      console.log(this.recipe.name);
    });
  }
}
