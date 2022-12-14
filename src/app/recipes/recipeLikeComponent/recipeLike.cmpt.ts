import { Component } from "@angular/core";

@Component({
    selector: 'recipe-like',
    template: `
    <i
      class="bi bi-heart-fill m-1"
      [class]="isLiked ? 'bi-heart-fill' : 'bi-heart'"
      style="font-size: 1rem; color: rgb(211, 7, 7); cursor: pointer"
      (click)='onLike()'
    ></i>
    `
})
export class RecipeLikeComponent{
    isLiked!: boolean;
    onLike(){
        this.isLiked = !this.isLiked;
    }
}