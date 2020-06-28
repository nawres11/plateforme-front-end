import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import{ServerService} from '../../../services/server/server.service';
import {Serveur} from '../../../entities/Serveur';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

  @Output() closeAll = new EventEmitter<boolean>();
  server: Serveur;
  submitted = false;
  servers:any=[];
  serversList: Observable<any>
  constructor(private serverService: ServerService, private router: Router) {
  }
 


  ngOnInit() {
    this.submitted = false;
    this.server= new Serveur();
     
    
    }
  
  
  save() {
    
      this.serverService.createServer(this.server).subscribe(data => console.log(data), error1 => console.log(error1));
      this.server = new Serveur();
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
