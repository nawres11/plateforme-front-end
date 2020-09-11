import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxListComponent} from './flux-list.component';
import {FluxListRoutingModule} from './flux-list-routing.module';
import { FooterComponent } from 'src/app/FRONT-OFFICE/footer/footer.component';
import { BACKOFFICEComponent } from '../../back-Nav/back-office.component';


@NgModule({
  imports: [
    CommonModule,
    FluxListRoutingModule
  ],
  declarations: [FluxListComponent, FooterComponent, BACKOFFICEComponent]
})
export class FluxListModule { }
