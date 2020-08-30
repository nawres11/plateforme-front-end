import { Component ,ElementRef, ViewChild} from '@angular/core';
import {slider,Animation,fader} from './FRONT-OFFICE/animation/route-animation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider,
    Animation,
    fader
  ]
})
export class AppComponent {
  title = 'site UIB';

  prepareRoute(outlet: RouterOutlet) {
    return  outlet && outlet.activatedRouteData;
  }
  
}