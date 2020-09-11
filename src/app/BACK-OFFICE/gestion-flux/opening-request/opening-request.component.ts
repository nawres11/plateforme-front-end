import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Flux } from 'src/app/entities/Flux';
import {FluxService} from'../../../services/flux/flux.service';


@Component({
  selector: 'app-opening-request',
  templateUrl: './opening-request.component.html',
  styleUrls: ['./opening-request.component.css']
})
export class OpeningRequestComponent implements OnInit {
  fluxs:Flux[];
  constructor( private fluxService:FluxService,private router: Router) { }

  ngOnInit() {
    
  }

  
  
}
