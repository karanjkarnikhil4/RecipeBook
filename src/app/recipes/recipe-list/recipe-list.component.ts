import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>()

  recipes:Recipe[] = [new Recipe("alfredo","new alfredo dish","https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103"),
  new Recipe("pizza","special pizza","https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_1280,c_limit/Basically-Spinach-Tarte-Recipe.jpg")];

  constructor() {

  }

  ngOnInit() {
  }

  itemSelected(recipe:Recipe)
  {
    this.selectedRecipe.emit(recipe)
  }
}
