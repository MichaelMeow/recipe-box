import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  addRecipe(addedRecipeTitle: string, addedRecipeIngredients: string, addedRecipeDirections: string): void {

    this.recipes.push(new Recipe(addedRecipeTitle, addedRecipeIngredients, addedRecipeDirections));
  }

  ngOnInit() {
  }


  //send recipes array to our "database" which will be a local file.  That way our data will be at the "top" of our architecture, and can be passed down.

}
