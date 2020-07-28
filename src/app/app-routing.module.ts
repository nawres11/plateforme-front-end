import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './FRONT-OFFICE/home/home.component';
import {RegisterLoginComponent} from './FRONT-OFFICE/register-Login/register-login.component';
import {ServerListComponent} from'./BACK-OFFICE/gestion-server/server-list/server-list.component';
import{CreateServerComponent} from'./BACK-OFFICE/gestion-server/create-server/create-server.component';
import{UpdateComponent} from './BACK-OFFICE/gestion-server/update/update.component';
import{ServerDetailsComponent} from'./BACK-OFFICE/gestion-server/server-details/server-details.component';
import {FluxListComponent} from './BACK-OFFICE/gestion-flux/flux-list/flux-list.component';
import {CreateOpeningRequestComponent} from './BACK-OFFICE/gestion-flux/create-opening-request/create-opening-request.component';
import {OpeningRequestComponent} from './BACK-OFFICE/gestion-flux/opening-request/opening-request.component';
import {BACKOFFICEComponent} from './BACK-OFFICE/back-Nav/back-office.component';
import {DashbordComponent} from './BACK-OFFICE/dashbord/dashbord.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  
  {path : '', component: RegisterLoginComponent},
  {path :'Login', component: RegisterLoginComponent},
  {path : 'admin', component: DashbordComponent},
  {path : 'user', component: DashbordComponent},
  {path : 'user/ServerList', component: ServerListComponent},
  {path : 'user/details/:id', component: ServerDetailsComponent},
  {path : 'admin/ServerList', component: ServerListComponent},
  {path : 'admin/addServer', component: CreateServerComponent},
  {path : 'admin/update/:id', component: UpdateComponent},
  {path : 'admin/details/:id', component: ServerDetailsComponent},
  {path : 'user/FluxList', component: FluxListComponent},
  {path : 'user/addFlux', component: CreateOpeningRequestComponent},
  {path : 'admin/FluxList', component: FluxListComponent},
  {path : 'admin/addFlux', component: CreateOpeningRequestComponent},
  {path : 'admin/validate', component: OpeningRequestComponent},
  {path : 'admin/dashboard', component:DashbordComponent}

];
/*canActivate:[AuthGuard],data:{ expectedRole:"USER"}
canActivate:[AuthGuard],data:{ expectedRole:"ADMIN"*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

