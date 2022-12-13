import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TRecipe } from "src/app/shared/interfaces";
import { UserRecipeService } from "../../userRecipes.service";

@Component({
    selector: 'user-recipes',
    templateUrl: './userRecipes.cmpt.html',
    styles: ['h2 {text-align: center;}']
})
export class UserRecipes implements OnInit{
    constructor(private activatedRoute: ActivatedRoute, private userRecipeService: UserRecipeService) {}

    userRecipes: TRecipe[] | [] = [];

    userId = this.activatedRoute.snapshot.params['userId'];
    ngOnInit(): void {
        this.userRecipeService.getUserRecipes(this.userId).subscribe({
            next: recipes => this.userRecipes = recipes,
            error: err => console.log(err)
        });
    }
}