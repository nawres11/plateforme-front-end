import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css'],
})
export class RegisterLoginComponent implements OnInit {
  thisPage: string;
  logTrue: boolean;
  signTrue: boolean;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (this.auth.isAuthentified()) {
      if (this.auth.isAdmin()) {
        this.router.navigateByUrl('/admin');
      } else if (this.auth.isUser()) {
        this.router.navigateByUrl('/user');
      }
    }
    this.logTrue = true;
    this.signTrue = false;
    this.thisPage = 'logReg';
  }

  change() {
    this.logTrue = !this.logTrue;
    this.signTrue = !this.signTrue;
  }
}
