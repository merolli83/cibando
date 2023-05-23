import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  //variabile creata prima del costruttore
  //tipizzata come Recipe[]
  ricette: Recipe[];

//metto un costruttore per iniettare il servizio
  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      // il next verrà usato se la chiamata va a buon fine
      next: (response) => {
        this.ricette = response;
      },
      error: (err) => {
        // stampo nella console l'errore che restituisce il server
        console.log(err);
      }
    })
  }
}
