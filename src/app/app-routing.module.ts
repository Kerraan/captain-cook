import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/components/recipes/recipes.component';
import { PlannerComponent } from './planner/components/planner/planner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'planner', component: PlannerComponent },
  { path: '', component: PlannerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
