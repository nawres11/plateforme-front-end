import {Component, OnInit,EventEmitter, Input,Output} from '@angular/core';
import {Serveur} from '../../../entities/Serveur';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService } from '../../../services/server/server.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Output() closeAll = new EventEmitter<boolean>();
  @Input()  id_serveur: number;
  idServer:number;
  server: Serveur;
  servers:any=[];

  constructor(private route: ActivatedRoute, private router: Router, private serverService: ServerService) {
  }

  ngOnInit() {

    this.server= new Serveur();
    this.idServer=this.id_serveur;
    this.serverService.getServertById(this.id_serveur).subscribe(data => {
      console.log(data);
      this.server= data;
      console.log('id : ' + data.server.id_serveur);
    }, error => console.log(error));
    this.serverService.getServers().subscribe(data => {
      this.servers= data;
    }, error => {
      console.log(error);
    });
  }

  update() {
    this.serverService.updateServer(this.id_serveur, this.server)
      .subscribe(data => console.log(data), error => console.log(error));
    this.server= new Serveur();
  }


  closeThis() {
    this.update();
    this.router.navigate(['/ServerList']);
    this.closeAll.emit(true);
  }
}




