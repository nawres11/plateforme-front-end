import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Projet} from '../../../entities/Projet';
import{ProjetService} from '../../../services/projet/projet.service';


@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent implements OnInit {
  
  @Output() closeAll = new EventEmitter<boolean>();
  project: Projet;
  submitted = false;
  projects: any = [];
  projectssList: Observable<any>;
  maxDate = new Date(2021, 0, 0);
  minDate = new Date(2008, 0, 1);
  private convertDate: string;
  
  constructor(
    private projetService: ProjetService,
    private router: Router) {
    this.project= new Projet();
  }

  ngOnInit() {
    this.submitted = false;
  }

  
  goToList() {
    this.projetService.getProjects();
    this.router.navigate(['admin/ProjetList']);
  }
  
  save() {
    this.projetService.createProject(this.project).subscribe(
      (data) => console.log('project', data),
      (error1) => console.log(error1)
    );
    this.project= new Projet();
    this.goToList();
  }

  closeThis() {
    this.submitted = true;
    
    this.save();
    this.closeAll.emit(true);
  }
  date(e) {
    this.convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    
  }

}
