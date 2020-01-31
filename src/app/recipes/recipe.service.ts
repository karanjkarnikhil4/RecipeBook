import { ShoppingService } from './../shopping-list/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService
{
    constructor(private shoppingService:ShoppingService)
    {
    }

   private recipes:Recipe[] = [new Recipe(1,"alfredo",
   "new alfredo dish","https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103"
   ,[new Ingredient('Meat',1),new Ingredient('French Fries',20)]),
    new Recipe(2,"pizza","special pizza","https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_1280,c_limit/Basically-Spinach-Tarte-Recipe.jpg",
    [new Ingredient('Meat',1),new Ingredient(' Buns',1)])];

    selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();

    public getRecipes()
    {
        return this.recipes.slice();
    }

    public getRecipesById(id:number):Recipe
    {
        return this.recipes.find((recipe=>recipe.id ===id));
    }

    public addToShoppingList(ingredients:Ingredient[])
    {
        this.shoppingService.addIngredientsToShoppingList(ingredients);
    }
}