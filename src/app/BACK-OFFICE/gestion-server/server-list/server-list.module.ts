import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerListComponent } from './server-list.component';
import {ServerListRoutingModule} from './server-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ServerListRoutingModule   
  ],
  declarations: [ServerListComponent]
})
export class ServerListModule { }
