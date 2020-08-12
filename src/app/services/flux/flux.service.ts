import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flux } from 'src/app/entities/Flux';

@Injectable({
  providedIn: 'root',
})
export class FluxService {
  private baseUrl = 'http://127.0.0.1:82/rest/fluxs';
  constructor(private http: HttpClient) {}

  // fluxs:any=[];

  getFluxs(): Observable<Flux[]> {
    return this.http.get<Flux[]>(`${this.baseUrl}`);
  }

  createFlux(flux: object): Observable<object> {
    console.log('flux=  ', flux);

    return this.http.post(`${this.baseUrl}`, flux);
  }
  getServersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/serversList`);
  }

  getFluxById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getFluxByServerId(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:82/rest/fluxs/fluxsByServers/${id}`);
  }
}
