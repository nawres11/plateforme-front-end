import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthenticationService} from "../../services/auth/authentication.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0px',
        overflow: 'hidden',
        opacity: '0'
      })),
      state('final', style({
        overflow: 'hidden',
        opacity: '0.9'
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms'))
    ]),
  ]
})
export class NavComponent implements OnInit {
  @Input() actif: string;
  acHome: boolean;
  acLogReg: boolean;

  constructor(private auth: AuthenticationService) { }
  private isOnP: boolean;
  


  ngOnInit() {
      this.acHome = false;
      this.acLogReg = false;
      
      if (this.actif === 'home') {
        this.acHome = true;
      
      } else {
        this.acLogReg = true;
      }
    }
  
  isLoggedIn() {
    return localStorage.getItem('token');
  }

  logOut(){
     this.auth.loggedOut();
     
  }

}

