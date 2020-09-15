import { Component, OnInit } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { Serveur} from '../../../entities/Serveur';
import {Flux} from '../../../entities/Flux';
import { tap, delay, first } from 'rxjs/operators';
import { FluxService} from '../../../services/flux/flux.service';
import {ServerService} from '../../../services/server/server.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-flux-list',
  templateUrl: './flux-list.component.html',
  styleUrls: ['./flux-list.component.css']
})
export class FluxListComponent implements OnInit {

  fluxs: any = new BehaviorSubject([]);
  server: Serveur;
  id: number;
  public showAddFlux: boolean;
  blurAll: boolean;
  public reloadData$ = this.fluxService.fluxCreated$.pipe(
    first(),
    delay(600),
    tap((fluxCreated) => this.reloadData())
  );

  
  constructor(private fluxService: FluxService, private router: Router) 
  {
    this.router.events.pipe(first()).subscribe((val) => {
      this.reloadData();
    });
  }

  ngOnInit() {
    this.blurAll = false;
    this.reloadData();
  }

  reloadData() {
    //this.fluxs = this.fluxService.getFluxs();

      this.fluxService
        .getFluxs()
        .pipe(first())
        .subscribe((fluxs) => (this.fluxs = fluxs));
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
  

  removeFlux(id: number) {
    if (confirm(`Voulez-vous supprimer le flux #${id}`)) {
      this.fluxService.removeFlux(id)
        .pipe(first())
        .subscribe(
          success => console.log('Server deleted'),
          error1 => console.error('Server deletion failed')
        );
    }
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
}
