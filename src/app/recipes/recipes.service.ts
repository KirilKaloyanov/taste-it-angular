import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  host = 'https://taste-it-api-node.herokuapp.com/api';
  constructor(private http: HttpClient) {}
  getRecipes() {
    // return fetch('https://taste-it-api-node.herokuapp.com/api/recipes').then(res => res.json());
    return this.http.get<any>(`${this.host}/recipes`);
  }

  getSingleRecipe(id: number) {
    return this.http.get<any>(this.host + '/recipes/' + id);
  }

  getCategories() {
    return this.http.get<any>(`${this.host}/categories`);
  }
}
