import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { RECIPES } from './mock-recipes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipesList = RECIPES;

  selectedRecipe: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
};
