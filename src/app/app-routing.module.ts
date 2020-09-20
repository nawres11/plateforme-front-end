import { AdminGuard } from './admin.guard';
import { AdminLoginComponent } from './FRONT-OFFICE/register-Login/admin-login/login.component';
import { ProjectListComponent } from './BACK-OFFICE/gestion-projet/projects-list/project-list.component';
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
import { AuthGuard } from './auth.guard';
import { CreateProjectComponent } from './BACK-OFFICE/gestion-projet/create-project/create-project.component';

const routes: Routes = [
  { path: '', component: RegisterLoginComponent },
  { path: 'Login', component: RegisterLoginComponent },
  { path: 'user', component: ServerListComponent, canActivate: [AuthGuard] },
  { path: 'admin/Login', component: AdminLoginComponent },
  { path: 'admin', component: DashbordComponent, canActivate: [AuthGuard] },
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
  // {
  //   path: 'admin/details/:id',
  //   component: ServerDetailsComponent,
  //   canActivate: [AuthGuard],
  // },
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
    canActivate: [AuthGuard, AdminGuard],
  },
  // ----------------
  {
    path: 'admin/ProjectList',
    component: ProjectListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'admin/addProject',
    component: CreateProjectComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  // {
  //   path: 'user/addFlux',
  //   component: CreateOpeningRequestComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'admin/FluxList',
  //   component: FluxListComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'admin/addFlux',
  //   component: CreateOpeningRequestComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
