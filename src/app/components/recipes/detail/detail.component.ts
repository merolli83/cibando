import { Component, OnInit} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  ricetta: Recipe;
  constructor(private recipeservice:RecipeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              ) {}
    ngOnInit(): void {
      this.onGetRecipe();
    }
//primo metodo di recupero parametri da url tramite snapshot
    onGetRecipe(): void{
  const id = Number (this.activatedRoute.snapshot.paramMap.get('_id'));

  this.recipeservice.getRecipe(id).subscribe({
  next: (res) => {
    this.ricetta = res;
    console.log('ecco la nostra ricetta trovata ' + this.ricetta.title);
  },
  error: (err) => {
    console.log(err);
  }
})
}
//secondo metodo alternativo tramite params
ongetRecipe2(): void {
  this.activatedRoute.params.subscribe((urlParams) => {
    const id = urlParams['_id'];
    const idNumerico = Number(id);

    this.recipeservice.getRecipe(idNumerico).subscribe(res => this.ricetta = res);
  })
}
            }
