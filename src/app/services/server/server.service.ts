import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Serveur } from '../../entities/Serveur';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  servers: any = [];
  public serverCreatedSubject = new BehaviorSubject<boolean>(false);
  public serverCreated$ = this.serverCreatedSubject
    .asObservable()
    .pipe(filter((serverCreated) => {
      return !!serverCreated;
    }));
  private baseUrl = 'http://localhost:8081/rest/servers';

  constructor(private http: HttpClient) {}

  getServers() {
    return this.http.get<Serveur[]>(`${this.baseUrl}`);
  }

  getServertById(id: number): Observable<any> {
    return this.http.get<Serveur>(`${this.baseUrl}/${id}`);
  }

  createServer(server: object): Observable<any> {
    this.serverCreatedSubject.next(true);
    return this.http.post(`${this.baseUrl}`, server);
  }

  updateServer(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
