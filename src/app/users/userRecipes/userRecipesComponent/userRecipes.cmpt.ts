import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TRecipe } from "src/app/shared/interfaces";
import { UserRecipeService } from "../../userRecipes.service";

@Component({
    selector: 'user-recipes',
    templateUrl: './userRecipes.cmpt.html',
    styleUrls: ['./userRecipes.cmpt.css']
})
export class UserRecipes implements OnInit{
    constructor(private activatedRoute: ActivatedRoute, private userRecipeService: UserRecipeService) {}

    userRecipes: TRecipe[] | [] = [];
    showModal: boolean = false;
    deleteBtnText: string = 'Delete';
    recipeForDeletion: {id: number, index: number} = {id: -1, index: -1};

    userId = this.activatedRoute.snapshot.params['userId'];
    ngOnInit(): void {
        this.userRecipeService.getUserRecipes(this.userId).subscribe({
            next: recipes => this.userRecipes = recipes,
            error: err => console.log(err)
        });
    }

    showDeleteDialog(id: number, index: number) {
        this.showModal = true;
        this.recipeForDeletion.id = id;
        this.recipeForDeletion.index = index;
    }

    hideDeleteDialog(){
        this.showModal = false;
        this.recipeForDeletion.id = -1;
        this.recipeForDeletion.index = -1;
    }

    deleteRecipe(){
        this.deleteBtnText = 'Delete ...';
        this.userRecipeService.deleteRecipe(this.recipeForDeletion.id).subscribe({
            next: () => {
                this.userRecipes.splice(this.recipeForDeletion.index, 1);
                this.hideDeleteDialog();
                this.deleteBtnText = 'Delete';
            }
        })
    }
}