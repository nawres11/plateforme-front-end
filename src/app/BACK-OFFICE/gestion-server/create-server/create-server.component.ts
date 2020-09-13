import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerService } from '../../../services/server/server.service';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet/projet.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent implements OnInit {
  public serverCreationForm = new FormGroup({
    intitule: new FormControl(),
    port: new FormControl(),
    url: new FormControl(),
    type: new FormControl(),
    statut: new FormControl(),
  });
  @Output() closeAll = new EventEmitter<boolean>();
  submitted = false;

  constructor(
    private serverService: ServerService,
    private router: Router,
    private projectsService: ProjetService,
  ) {}

  ngOnInit() {
    this.submitted = false;
  }

  save() {
    this.serverService.createServer(this.serverCreationForm.getRawValue()).subscribe(
      (data) => alert('server created'),
      (error1) => {console.log(error1); alert('an error has occured'); }
    );
    this.serverCreationForm.reset();
    this.goToList();
  }

  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }

  goToList() {
    this.serverService.getServers();
    this.router.navigate(['admin/ServerList']);
  }
}
