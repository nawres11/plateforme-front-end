import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  API_URL = `${SERVER_URL}/rest`;
  constructor(private auth: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('login1== ', req);

    let authReq = req;

    if (
      req.url === `${SERVER_URL}/login` ||
      req.url === `${this.API_URL}/register` ||
      req.url.substring(0, 33) === `${this.API_URL}/servers` ||
      req.url === `${this.API_URL}/fluxs` ||
      req.url === `${this.API_URL}/projects`
    ) {
      return next.handle(req);
    } else {
      const token = this.auth.getToken();

      if (token != null) {
        authReq = req.clone({
          headers: req.headers.set('Authorization', token),
        });
      }
      console.log('login2== ', authReq);
      console.log('token ==', token);
      return next.handle(authReq);
    }
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
