import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Projet } from '../../entities/Projet';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  projects: any = [];
  public projectCreatedSubject = new BehaviorSubject<boolean>(false);
  public projectCreated$ = this.projectCreatedSubject
    .asObservable()
    .pipe(filter((projectCreated) => {
      return !!projectCreated;
    }));
  private baseUrl = `${SERVER_URL}/rest/projects`;

  constructor(private http: HttpClient) {}

 
  getProjects() {
    return this.http.get(`${this.baseUrl}`);
  }
  getProjecttById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createProject(project: object): Observable<any> {
    this.projectCreatedSubject.next(true);
    return this.http.post(`${this.baseUrl}`, project);
  }

}
