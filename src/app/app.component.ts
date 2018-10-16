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
  editVariable: Recipe;

  onSelect(recipe): void {
    this.selectedRecipe = recipe;
  }

  hide(): void {
    this.selectedRecipe = null;
  }

  edit(recipe): void {
    this.editVariable = recipe;
  }

  hideClick(): void {
    this.editVariable = null;
  }
};
