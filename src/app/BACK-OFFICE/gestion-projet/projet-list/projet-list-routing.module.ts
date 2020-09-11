import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjetListComponent } from './projet-list.component';
import {CreateProjetComponent} from'../create-projet/create-projet.component';

const routes: Routes = [
  {path: '', component: ProjetListComponent },
  {path : 'addProjet', component:CreateProjetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetListRoutingModule { }