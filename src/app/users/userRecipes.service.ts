import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiEndpoint } from '../shared/apiEndpoint';
@Injectable()
export class UserRecipeService {
  host = apiEndpoint;
  constructor(private http: HttpClient) {}

  getUserRecipes(userId: string) {
    return this.http.get<any>(this.host + '/recipes/users/' + userId)
  }

  createRecipe(recipe: any) {
    return this.http.post<any>(this.host + '/recipes', recipe)
  }

  updateRecipe(recipe: any, id: string) {
    return this.http.put<any>(this.host + '/recipes/' + id, recipe)
  }
}
