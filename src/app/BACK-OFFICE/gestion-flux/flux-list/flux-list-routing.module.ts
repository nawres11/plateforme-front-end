import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FluxListComponent  } from './flux-list.component';
import {CreateOpeningRequestComponent } from'../create-opening-request/create-opening-request.component';
import { OpeningRequestComponent} from '../opening-request/opening-request.component';

const routes: Routes = [
  {path: '', component: FluxListComponent },
  {path : 'addFlux', component: CreateOpeningRequestComponent},
  {path : 'validate', component: OpeningRequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxListRoutingModule { }