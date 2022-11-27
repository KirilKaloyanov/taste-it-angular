import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes.service';

type tCategory = { name: string; _id: number };

type tComment = { comment: string; createdAt: Date; user: string; _id: number };

type tLike = { like: boolean; user: string; _id: number };

type tRecipe = {
  category: tCategory;
  comments: tComment[];
  ingredients: { id: number; ingredient: string }[];
  likes: tLike[];
  methods: { id: number; method: string }[];
  name: string;
  numberOfServings: number;
  userId: { username: string };
  _id: number;
};

@Component({
  selector: 'recipe',
  templateUrl: './recipeDetails.cmpt.html',
  styleUrls: ['./recipeDetails.cmpt.css'],
})
export class RecipeDetailsComponent {
  recipe!: tRecipe;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getSingleRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
      console.log(this.recipe);
    });
  }
}
