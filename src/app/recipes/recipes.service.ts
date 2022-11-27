import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {}
  getRecipes() {
    // return fetch('https://taste-it-api-node.herokuapp.com/api/recipes').then(res => res.json());
    return this.http.get<any>(
      'https://taste-it-api-node.herokuapp.com/api/recipes'
    );
  }

  getSingleRecipe(id: number) {
    return this.http.get<any>(
      'https://taste-it-api-node.herokuapp.com/api/recipes/' + id
    );
  }
}
