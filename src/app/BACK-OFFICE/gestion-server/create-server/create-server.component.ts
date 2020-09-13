import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerService } from '../../../services/server/server.service';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet/projet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent implements OnInit {
  public serverCreationForm = new FormGroup({
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
    statut: new FormControl('', [Validators.required]),
  });
  @Output() closeAll = new EventEmitter<boolean>();
  submitted = false;

  constructor(
    private serverService: ServerService,
    private router: Router,
    private projectsService: ProjetService
  ) {}

  ngOnInit() {
    this.submitted = false;
  }

  save() {
    this.serverService
      .createServer(this.serverCreationForm.getRawValue())
      .subscribe(
        (data) => alert('server created'),
        (error1) => {
          console.log(error1);
          alert('an error has occured');
        }
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
