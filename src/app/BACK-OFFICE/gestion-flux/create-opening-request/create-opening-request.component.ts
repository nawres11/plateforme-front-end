import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Flux } from 'src/app/entities/Flux';
import {FluxService} from'../../../services/flux/flux.service';




@Component({
  selector: 'app-create-opening-request',
  templateUrl: './create-opening-request.component.html',
  styleUrls: ['./create-opening-request.component.css'],

})
export class CreateOpeningRequestComponent  {

  @Output() closeAll = new EventEmitter<boolean>();
  flux: Flux;
  submitted = false;
  id:number;
  fluxs:any = [];
  fluxsList: Observable<Flux>;
  constructor(private fluxService:FluxService, private router: Router) {
    this.flux= new Flux();
   }

 
  ngOnInit() {
    this.submitted = false;
    //this.flux= new Flux();
  }

  save() {
    console.log(this.flux);
    this.fluxService.createFlux(this.flux)
      .subscribe(
        data => console.log("msg:",data),
        error1 => console.log(error1)
      );
    this.flux= new Flux();
    this.goToList();
  } 


goToList() {
  this.fluxService.getFluxs();
  this.router.navigate(['admin/FluxList']);
}
closeThis() {
  this.submitted = true;
  this.save();
  this.closeAll.emit(true);
 }
  

}




