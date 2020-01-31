import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes:Routes = [
    {path:'recipes', component:RecipesComponent, children:[{path:"",component:RecipeStartComponent,pathMatch:"full"},
    {path:'new', component:RecipeEditComponent},
     {path:':id', component:RecipeDetailComponent},
     {path:':id/edit', component:RecipeEditComponent}]},
    {path:'shopping-list', component:ShoppingListComponent},
    {path:'', redirectTo:'/recipes',pathMatch:'full'}
];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})
export class AppRouting{

}