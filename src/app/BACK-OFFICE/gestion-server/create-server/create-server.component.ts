import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerService } from '../../../services/server/server.service';
import { Serveur } from '../../../entities/Serveur';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet/projet.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent implements OnInit {
  public form = new FormGroup({
    intitule: new FormControl(),
    port: new FormControl(),
    url: new FormControl(),
    type: new FormControl(),
    projects: new FormControl(),
    statut: new FormControl(),
  });
  @Output() closeAll = new EventEmitter<boolean>();
  server: Serveur;
  submitted = false;
  servers: any = [];
  serversList: Observable<any>;
  projectsIds: number[];
  projectsList$ = this.projectsService.getprojects();

  constructor(
    private serverService: ServerService,
    private router: Router,
    private projectsService: ProjetService,
  ) {
    this.server = new Serveur();
  }

  ngOnInit() {
    this.submitted = false;
  }

  save() {
    this.serverService.createServer(this.server).subscribe(
      (data) => console.log('server ', data),
      (error1) => console.log(error1)
    );
    this.server = new Serveur();
    this.goToList();
  }

  closeThis() {
    this.submitted = true;
    console.warn('server', this.server);
    this.save();
    this.closeAll.emit(true);
  }

  goToList() {
    this.serverService.getServers();
    this.router.navigate(['admin/ServerList']);
  }
}
