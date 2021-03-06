import { RecipeService } from './../recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[];

  constructor(private recipeService:RecipeService,private route:Router) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  OnNewRecipeClicked()
  {
        this.route.navigate(['/recipes','new'])
  }
  
}
