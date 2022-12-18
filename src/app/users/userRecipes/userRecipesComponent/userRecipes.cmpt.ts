import { Component, OnInit } from "@angular/core";
import { TRecipe } from "src/app/shared/interfaces";
import { UserRecipeService } from "../../userRecipes.service";
import { UsersService } from "../../users.service";

@Component({
    selector: 'user-recipes',
    templateUrl: './userRecipes.cmpt.html',
    styleUrls: ['./userRecipes.cmpt.css']
})
export class UserRecipes implements OnInit{
    constructor(private usersService: UsersService, private userRecipeService: UserRecipeService) {}

    userRecipes: TRecipe[] | [] = [];
    loadingRecipes: boolean = true;
    showModal: boolean = false;
    deleteBtnText: string = 'Delete';
    recipeForDeletion: {id: number, index: number} = {id: -1, index: -1};

    userId = this.usersService.getUserId();

    ngOnInit(): void {
        if (this.userId != null) {
            this.userRecipeService.getUserRecipes(this.userId).subscribe({
                next: recipes => {
                    if (!recipes.message)
                    this.userRecipes = recipes;
                    this.loadingRecipes = false;
                },
                error: err => console.log(err)
            });
        }
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
            },
            error: err => console.log(err)
        })
    }
}