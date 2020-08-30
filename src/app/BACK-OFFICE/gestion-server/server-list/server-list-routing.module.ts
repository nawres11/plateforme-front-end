import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServerListComponent } from './server-list.component';
import {CreateServerComponent} from'../create-server/create-server.component';
import{UpdateComponent} from '../update/update.component';
import{ServerDetailsComponent} from'../server-details/server-details.component';

const routes: Routes = [
  {path: '', component: ServerListComponent},
  {path : 'addServer', component: CreateServerComponent},
  {path : 'update', component: UpdateComponent},
  {path : 'details', component: ServerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerListRoutingModule { }
