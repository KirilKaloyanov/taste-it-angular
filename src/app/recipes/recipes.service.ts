import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { apiEndpoint } from '../shared/apiEndpoint';
@Injectable()
export class RecipeService {
  host = apiEndpoint;
  constructor(private http: HttpClient) {}
  getRecipes() {
    // return fetch('https://taste-it-api-node.herokuapp.com/api/recipes').then(res => res.json());
    return this.http.get<any>(`${this.host}/recipes`);
  }

  getCategories() {
    return this.http.get<any>(`${this.host}/categories`);
  }

  getSingleRecipe(id: number) {
    return this.http.get<any>(this.host + '/recipes/' + id);
  }

  getUserRecipes(userId: string) {
    return this.http.get<any>(this.host + '/recipes/users/' + userId)
  }
}
