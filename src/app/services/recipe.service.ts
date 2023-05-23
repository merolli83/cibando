import { Injectable } from '@angular/core';
//importo il modello per poter tipizzare la response che mi arriverà dal BE
import { Recipe } from '../models/recipe.model';
//finchè non è pronto il BE mi devo importare anche il mock
import { RECIPES } from '../mocks/recipe.mock';
// se non lavoravo con il mock, of non serviva
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
//metodo asincrono observable, tipizzato
  getRecipes(): Observable<Recipe[]> {
    //deve ritornare con i valori del mock RECIPES
    return of (RECIPES);
  }
//devo creare un metodo di filtraggio
  getRecipe(id: number): Observable<Recipe | undefined> {
    const recipe = RECIPES.find(ricetta => ricetta._id === id);
    //quando la chiamata sarà vera of e parentesi non si metteranno
    return of (recipe);
  }


}
 //const ROLE: string[] = ['admin', 'editor', 'user']
 //se un modello è corto non serve importarlo come su ma lo scrivo direttamente nel servizio
