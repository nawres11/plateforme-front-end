import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private baseUrl = `${SERVER_URL}/rest/projects`;
  public projectCreatedSubject = new BehaviorSubject<boolean>(false);
  public projectCreated$ = this.projectCreatedSubject
    .asObservable()
    .pipe(filter((projectCreated) => {
      return !!projectCreated;
    }));

  constructor(private http: HttpClient) {}

  projects: any = [];
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

  updateProject(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
