import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'iz-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [];
  // @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Dummy', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg' );


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[])  => {
        console.log(recipes);
        this.recipes = recipes;
      }
    )
  }

  constructor(private recipeService: RecipeService) { }

}
