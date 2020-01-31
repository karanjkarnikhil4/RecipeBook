import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() selectedRecipe:Recipe;

  recipe:Recipe;

  constructor(private recipeService:RecipeService,private activeroute:ActivatedRoute, private route:Router) { }
  ngOnInit() {

    this.activeroute.params.subscribe((params:Params)=>this.recipe =this.recipeService.getRecipesById(+params['id']) );
  }

  public OnAddingToShoppingList()
  {
      this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

  OnEditRecipeClicked()
  {
    //this.route.navigate(['edit'])  //this also works
    this.route.navigate(['../',this.recipe.id,'edit'],{relativeTo:this.activeroute})
  }

}
