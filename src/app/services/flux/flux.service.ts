import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Flux } from 'src/app/entities/Flux';

@Injectable({
  providedIn: 'root',
})
export class FluxService {
  private baseUrl = `${SERVER_URL}/rest/fluxs`;
  public fluxCreatedSubject = new BehaviorSubject<boolean>(false);
  public fluxCreated$ = this.fluxCreatedSubject
    .asObservable()
    .pipe(filter((fluxCreated) => {
      return !!fluxCreated ;
    }));

  constructor(private http: HttpClient) {}

  // fluxs:any=[];

  getFluxs(): Observable<Flux[]> {
    return this.http.get<Flux[]>(`${this.baseUrl}`);
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
 
  
  removeFlux(id: number): Observable<any> {
    this.fluxCreatedSubject.next(true);
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createFlux(flux: object): Observable<any> {
    console.log('flux=  ', flux);
    this.fluxCreatedSubject.next(true);
    return this.http.post(`${this.baseUrl}`, flux);
  }
}
