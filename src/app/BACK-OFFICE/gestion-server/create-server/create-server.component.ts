import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerService } from '../../../services/server/server.service';
import { Serveur } from '../../../entities/Serveur';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet/projet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent implements OnInit {

  @Output() closeAll = new EventEmitter<boolean>();
  server: Serveur;
  submitted = false;
  servers: any = [];
  serversList: Observable<any>;
  //projectsIds: number[];
  //projectsList$ = this.projectsService.getProjects();

  serverCreationForm = new FormGroup({
    id_projet: new FormControl('', [Validators.required]),
    intitule: new FormControl('', [Validators.required]),
    port: new FormControl('', [
      Validators.required,
      Validators.min(1024),
      Validators.max(49151),
    ]),
    url: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}'
      ),
    ]),
    type: new FormControl('', [Validators.required]),
    projects: new FormControl('', [Validators.required]),
    statut: new FormControl('', [Validators.required]),
  });

 
  constructor(
    private serverService: ServerService,
    private router: Router,
    private projectsService: ProjetService,
  ) {
    //this.server = new Serveur();
  }

  ngOnInit() {
    this.submitted = false;
  }

  save() {
    /*this.serverService.createServer(this.serverCreationForm .getRawValue()).subscribe(
      (data) => console.log('server ', data),
      (error1) => console.log(error1)
    );
    this.serverCreationForm.reset();
    this.goToList();*/
    this.serverService.createServer(this.serverCreationForm.getRawValue()).subscribe(
      (data) => alert('server created'),
      (error1) => {console.log(error1); alert('an error has occured'); }
    );
    this.serverCreationForm.reset();
    this.goToList();
  }

  closeThis() {
    this.submitted = true;
    //console.warn('server', this.server);
    this.save();
    this.closeAll.emit(true);
  }

  goToList() {
    this.serverService.getServers();
    this.router.navigate(['admin/ServerList']);
  }
}
