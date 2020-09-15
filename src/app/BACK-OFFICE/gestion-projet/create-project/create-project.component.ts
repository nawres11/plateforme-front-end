import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerService } from '../../../services/server/server.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjetService } from '../../../services/projet/projet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  public projectCreationForm = new FormGroup({
    intitule_projet: new FormControl('', [Validators.required]),
    dateCreation: new FormControl('', [Validators.required]),
    type_projet: new FormControl('', [Validators.required]),
    id_server: new FormControl('', [Validators.required]),
  });

  @Output() closeAll = new EventEmitter<boolean>();
  submitted = false;
  public server$: Observable<any> = this.serverService.getServers();

  constructor(
    private router: Router,
    private projectsService: ProjetService,
    private serverService: ServerService,
  ) {}

  ngOnInit() {
    this.submitted = false;
  }

  save() {
    this.projectsService.createProject(this.projectCreationForm.getRawValue()).subscribe(
      (data) => alert('project created'),
      (error1) => {console.log(error1); alert('an error has occured'); }
    );
    this.projectCreationForm.reset();
    this.goToList();
  }

  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }

  goToList() {
    this.projectsService.getProjects();
    this.router.navigate(['admin/ProjectList']);
  }
}
