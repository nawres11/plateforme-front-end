import { ProjetService } from 'src/app/services/projet/projet.service';
import { ServerService } from 'src/app/services/server/server.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flux } from 'src/app/entities/Flux';
import { FluxService } from '../../../services/flux/flux.service';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-opening-request',
  templateUrl: './create-opening-request.component.html',
  styleUrls: ['./create-opening-request.component.css'],
})
export class CreateOpeningRequestComponent implements OnInit {
  @Output() closeAll = new EventEmitter<boolean>();
  flux: any;

  submitted = false;
  id: number;

  fluxs: any = [];
  fluxsList: Observable<Flux>;

  fluxCreationForm = new FormGroup({
    id_serveur: new FormControl(''),
    id_projet: new FormControl(''),
    cadre: new FormControl(''),
    adresse_source: new FormControl(''),
    adresse_destinataire: new FormControl(''),
    port: new FormControl(''),
    duree: new FormControl(''),
    dateOuverture: new FormControl(''),
    periodicite: new FormControl(''),
    natureEchange: new FormControl(''),
    description: new FormControl(''),
    statut: new FormControl(''),
    type_flux: new FormControl(''),
  });

  relatedServer$: any;
  relatedServer: any;
  public server$: Observable<any> = this.serverService.getServers();
  public projects$: Observable<any> = this.projectService.getProjects();

  constructor(
    private fluxService: FluxService,
    private router: Router,
    private serverService: ServerService,
    private projectService: ProjetService,
  ) {
    this.flux = new Flux();
  }

  ngOnInit() {
    this.submitted = false;
    this.flux = new Flux();
  }

  save() {
    console.log(this.fluxCreationForm.getRawValue());
    this.fluxService.createFlux(this.fluxCreationForm.getRawValue()).subscribe(
      (data) => console.log('msg:', data),
      (error1) => console.log(error1)
    );
    this.fluxCreationForm.reset();
    this.goToList();
  }

  goToList() {
    this.fluxService.getFluxs();
    this.router.navigate(['admin/FluxList']);
  }

  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }

  onChange(id: number) {
    console.log(id);
    console.log(this.fluxCreationForm.get('id_serveur').value);

    if (this.fluxCreationForm.get('id_serveur').value) {
      console.warn(id);
      this.relatedServer$ = this.serverService
        .getServertById(id)
        .pipe(
          tap(
            (rs) => {
              this.relatedServer = rs;
              this.fluxCreationForm.get('port').setValue(this.relatedServer.port);
              this.fluxCreationForm.get('adresse_source').setValue(this.relatedServer.url);
            }
          )
        );
    }
  }
}
