import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterLoginComponent } from './FRONT-OFFICE/register-Login/register-login.component';
import { ServerListComponent } from './BACK-OFFICE/gestion-server/server-list/server-list.component';
import { CreateServerComponent } from './BACK-OFFICE/gestion-server/create-server/create-server.component';
import { UpdateComponent } from './BACK-OFFICE/gestion-server/update/update.component';
import { ServerDetailsComponent } from './BACK-OFFICE/gestion-server/server-details/server-details.component';
import { FluxListComponent } from './BACK-OFFICE/gestion-flux/flux-list/flux-list.component';
import { CreateOpeningRequestComponent } from './BACK-OFFICE/gestion-flux/create-opening-request/create-opening-request.component';
import { OpeningRequestComponent } from './BACK-OFFICE/gestion-flux/opening-request/opening-request.component';
import { DashbordComponent } from './BACK-OFFICE/dashbord/dashbord.component';
import {HomeComponent} from './FRONT-OFFICE/home/home.component';
import {ProjetListComponent} from './BACK-OFFICE/gestion-projet/projet-list/projet-list.component';
import {CreateProjetComponent}from './BACK-OFFICE/gestion-projet/create-projet/create-projet.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: RegisterLoginComponent },

  { path: 'admin', component: DashbordComponent, canActivate: [AuthGuard] },
  { path: 'user', component: DashbordComponent, canActivate: [AuthGuard] },
  {
    path: 'user/ServerList',
    component: ServerListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/details/:id',
    component: ServerDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/ServerList',
    component: ServerListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/addServer',
    component: CreateServerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/update/:id',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/details/:id',
    component: ServerDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/ProjetList',
    component: ProjetListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/addProjet',
    component: CreateProjetComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'user/FluxList',
    component: FluxListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/addFlux',
    component: CreateOpeningRequestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/FluxList',
    component: FluxListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/addFlux',
    component: CreateOpeningRequestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/validate',
    component: OpeningRequestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/dashboard',
    component: DashbordComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
