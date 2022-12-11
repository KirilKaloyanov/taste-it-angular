import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-recipes',
    templateUrl: './userRecipes.cmpt.html'
})
export class UserRecipes implements OnInit{
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const userId = this.activatedRoute.snapshot.params['userId'];
        console.log(userId);
    }
}