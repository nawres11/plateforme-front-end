import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../services/projet/projet.service';
import {Router} from '@angular/router';
import {Observable, BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

projects: any = [];
id: number;
public showAddProjet: boolean;
blurAll: boolean;

  constructor(private router: Router,private projetService:ProjetService) { 
    
    {
      this.router.events.subscribe((val) => {
        this.reloadData();
      });
    }}
  
  ngOnInit() {
    this.blurAll = false;
    
  }

reloadData() {
  this.projetService.getProjects().subscribe((projects) => (this.projects= projects));
}

addProjet() {
  this.showAddProjet= true;
  this.blurAll = true;
  this.router.navigate(['/addProjet']);
}


closeAdd() {

this.showAddProjet= false;
this.blurAll = false;
this.reloadData();
}

closeAddFromAdd($event) {
  if ($event === true) {
    this.closeAdd();
  }
}
}

