import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, delay, first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjetService } from '../../../services/projet/projet.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  public projects: any = [];
  public id: number;
  public showAddProject: boolean;
  public blurAll: boolean;
  public showModifProject: boolean;
  public showDetails: boolean;
  public reloadData$ = this.projectService.projectCreated$.pipe(
    first(),
    delay(600),
    tap((projectCreated) => this.reloadData())
  );
  public currentProject = null;
  public projectModificationForm = new FormGroup({
    intitule_projet: new FormControl(),
    dateCreation: new FormControl(),
    type_projet: new FormControl(),
    id_server: new FormControl(),
  });

  public searchKey: string;

  constructor(
    private projectService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.pipe(first()).subscribe((val) => {
      this.reloadData();
    });
  }

  ngOnInit() {
    this.blurAll = false;
  }

  reloadData() {
    this.projectService
      .getProjects()
      .pipe(first())
      .subscribe((projects) => (this.projects = projects));
  }

  details(id: number) {
    this.showDetails = true;
    this.blurAll = true;
    this.projectService.getProjecttById(id).pipe(first()).subscribe(
      (data) => {
        this.currentProject = data;
      },
      (error1) => console.log(error1)
    );
  }

  updateServer(id: number) {
    this.showModifProject = true;
    this.blurAll = true;
    this.projectService.updateProject(id, this.currentProject).pipe(first()).subscribe(
      (success) => {
        this.reloadData();
      },

      (err) => console.error(err)
    );
  }

  addProject() {
    this.showAddProject = true;
    this.blurAll = true;
    this.router.navigate(['admin/addProject']);
  }

  removeProject(id: number) {
    if (confirm(`Voulez-vous supprimer le projet #${id}`)) {
      this.projectService.removeProject(id)
        .pipe(first())
        .subscribe(
          success => console.log('Server deleted'),
          error1 => console.error('Server deletion failed')
        );
    }
  }

  closeAdd() {
    this.showDetails = false;
    this.showAddProject = false;
    this.showModifProject = false;
    this.blurAll = false;
    this.reloadData();
  }

  closeAddFromAdd($event) {
    if ($event === true) {
      this.closeAdd();
    }
  }

  onSearchClear() {
    // TODO
    throwError('not implemented');
  }

  applyFilter() {
    // TODO
    throwError('not implemented');
  }
}
