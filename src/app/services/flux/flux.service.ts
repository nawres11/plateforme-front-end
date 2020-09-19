import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Flux } from 'src/app/entities/Flux';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FluxService {
  private baseUrl = `${SERVER_URL}/rest/fluxs`;
  public fluxCreatedSubject = new BehaviorSubject<boolean>(false);
  public fluxCreated$ = this.fluxCreatedSubject
    .asObservable()
    .pipe(filter((fluxCreated) => {
      return !!fluxCreated;
    }));
  constructor(private http: HttpClient) {}

  getFluxs(): Observable<Flux[]> {
    return this.http.get<Flux[]>(`${this.baseUrl}`);
  }

  createFlux(flux: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, flux);
  }
  getServersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/serversList`);
  }

  getFluxById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getFluxByServerId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fluxsByServers/${id}`);
  }
}
