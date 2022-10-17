import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareCoinsComponent } from './components/compare-coins/compare-coins.component';
import { ConvertCoinsComponent } from './components/convert-coins/convert-coins.component';
import { ListCoinsComponent } from './components/list-coins/list-coins.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'menu'},
  {path:'menu', component:MenuComponent, data:{ component:'menu' }},
  {path: 'list', component:ListCoinsComponent, data:{ component:'list' }},
  {path: 'compare', component:CompareCoinsComponent, data:{ component:'compare' }},
  {path: 'convert', component:ConvertCoinsComponent, data:{ component:'convert' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
