import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { TLike, TRecipe } from 'src/app/shared/interfaces';

@Component({
  selector: 'recipe',
  templateUrl: './recipeDetails.cmpt.html',
  styleUrls: ['./recipeDetails.cmpt.css'],
})
export class RecipeDetailsComponent {
  recipe!: TRecipe;
  recipeLikes!: TLike[];

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getSingleRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
      this.recipeLikes = this.recipe.likes.filter((rl) => rl.like === true);
    });
  }
}
