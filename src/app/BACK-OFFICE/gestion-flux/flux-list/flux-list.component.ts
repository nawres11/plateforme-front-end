import { AuthenticationService } from './../../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Serveur } from '../../../entities/Serveur';
import { Flux } from '../../../entities/Flux';
import { FluxService } from '../../../services/flux/flux.service';
import { ServerService } from '../../../services/server/server.service';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-flux-list',
  templateUrl: './flux-list.component.html',
  styleUrls: ['./flux-list.component.css'],
})
export class FluxListComponent implements OnInit {
  fluxs: any = new BehaviorSubject([]);
  server: Serveur;
  id: number;
  public showAddFlux: boolean;
  blurAll: boolean;
  public reloadData$ = this.fluxService.fluxCreated$.pipe(
    delay(600),
    tap((flux) => this.reloadData())
  );

  public isAdmin = this.auth.isAdmin();

  constructor(private fluxService: FluxService, private router: Router, private auth: AuthenticationService) {
    this.router.events.subscribe(() => this.reloadData());
  }

  ngOnInit() {
    this.blurAll = false;
    this.reloadData();
  }

  reloadData() {
    this.fluxs = this.fluxService.getFluxs();
  }

  addFlux() {
    this.showAddFlux = true;
    this.blurAll = true;
    this.router.navigate(['admin/addFlux']);
  }

  validate() {
    this.fluxService.getFluxs();
    this.router.navigate(['admin/validate']);
  }
  closeAdd() {
    this.showAddFlux = false;
    this.blurAll = false;
    this.reloadData();
  }

  closeAddFromAdd($event) {
    if ($event === true) {
      this.closeAdd();
    }
  }

  validateFlux(id) {
    console.log(id);

    this.fluxService.validateFluxById(id).subscribe(
      success => alert('server Validated'),
      error1 => console.error(error1)
   );
  }
}
