import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FluxService } from '../../../services/flux/flux.service';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flux } from '../../../entities/Flux';
import { ServerService } from '../../../services/server/server.service';
import { ProjetService } from '../../../services/projet/projet.service';

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
    id_serveur: new FormControl('', [Validators.required]),
    id_projet: new FormControl('', [Validators.required]),
    cadre: new FormControl('', [Validators.required]),
    adresse_source: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}'
      ),
    ]),
    adresse_destinataire: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}'
      ),
    ]),
    port: new FormControl('', [
      Validators.required,
      Validators.min(1024),
      Validators.max(49151),
    ]),
    duree: new FormControl('', [Validators.required]),
    dateOuverture: new FormControl('', [Validators.required]),
    periodicite: new FormControl('', [Validators.required]),
    natureEchange: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    statut: new FormControl('', [Validators.required]),
    type_flux: new FormControl('', [Validators.required]),
  });

  relatedServer$: any;
  relatedServer: any;
  public server$: Observable<any> = this.serverService.getServers();
  public projects$: Observable<any> = this.projectService.getProjects();

  constructor(
    private fluxService: FluxService,
    private router: Router,
    private serverService: ServerService,
    private projectService: ProjetService
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
      this.relatedServer$ = this.serverService.getServertById(id).pipe(
        tap((rs) => {
          this.relatedServer = rs;
          this.fluxCreationForm.get('port').setValue(this.relatedServer.port);
          this.fluxCreationForm
            .get('adresse_source')
            .setValue(this.relatedServer.url);
        })
      );
    }
  }
}
