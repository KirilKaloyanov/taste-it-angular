import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { TLike, TRecipe } from 'src/app/shared/interfaces';

@Component({
  selector: 'recipe',
  templateUrl: './recipeDetails.cmpt.html',
  styles: ['h2 {text-align: center;}']
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
    console.log('1.recipeDetails before')
    this.recipeService.getSingleRecipe(id).subscribe((recipe) => {
      console.log('3.recipeDetails after')
      this.recipe = recipe;
      this.recipeLikes = this.recipe.likes.filter((rl) => rl.like === true);
    });
  }

  somestring(aDate: Date){
    let d = new Date(aDate);
    return d.toDateString() + ', ' + d.toLocaleTimeString();
  }
}
