import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  private baseUrl = 'http://localhost:8080/rest/servers';

  constructor(private http: HttpClient) {
  }

  getServers(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }
  getServertById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createServer(server: object, id: number): Observable<object> {
    return this.http.post(`${this.baseUrl}/${id}`,server);
  }
  
  updateServer(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
}
