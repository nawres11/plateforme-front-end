import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../../entities/Projet';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private baseUrl = `${SERVER_URL}/rest/projects`;

  constructor(private http: HttpClient) {}

  projects: any = [];
  getprojects() {
    return this.http.get(`${this.baseUrl}`);
  }
  getprojecttById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
