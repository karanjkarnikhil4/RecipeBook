import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes:Routes = [
    {path:'recipes', component:RecipesComponent},
    {path:'shopping-list', component:ShoppingListComponent},
    {path:'', redirectTo:'/recipes',pathMatch:'full'}
];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})
export class AppRouting{

}