import { Component, OnInit } from '@angular/core';
import {Serveur} from '../../../entities/Serveur';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from'../../../services/server/server.service';


@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  id: number;
  server: Serveur;
 constructor(private route: ActivatedRoute, private router: Router, private serverService: ServerService) { }

 ngOnInit() {
  this.server= new Serveur();
 }
 
 details(id:number):void{
  // this.id = this.route.snapshot.params['id'];
  this.serverService.getServertById(id).subscribe(data => {
    console.error("details ! ", data);
    this.server = data;
  }, error1 => console.log(error1));
}

list() {
  this.router.navigate(['/ServerList']);
}
}
