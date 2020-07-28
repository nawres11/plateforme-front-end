import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {User} from '../../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:82/rest';

   private headers = new HttpHeaders({'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbCIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiL2xvZ2luIiwiZXhwIjoxNTc1NDg4Nzc5fQ.k8ZKAtZUaGXefvsTgqyku_pANq_sH5rbd2NV0xQxLFM'});
  
   constructor(private http: HttpClient) { }

  add(user: User): Observable<object> {
    return this.http.post(this.baseUrl + '/register', user);
  }
 
  findById(id): Observable<any> {
    return this.http.get(this.baseUrl + '/user/' + id);
  }
  findByEmail(email): Observable<any> {
    return this.http.get(this.baseUrl + '/usermail/' + email);
  }

}
