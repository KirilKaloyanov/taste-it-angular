import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../recipes.service";

@Component({
    selector: 'user-recipes',
    templateUrl: './userRecipes.cmpt.html'
})
export class UserRecipes implements OnInit{
    constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {}

    ngOnInit(): void {
        const userId = this.activatedRoute.snapshot.params['userId'];
        this.recipeService.getUserRecipes(userId).subscribe({
            next: response => console.log(response),
            error: err => console.log(err)
        });
    }
}