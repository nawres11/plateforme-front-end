import { SERVER_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  API_URL = `${SERVER_URL}/rest`;

  constructor(private http: HttpClient) {
  }

  /**
   * countServers
   */
  public countServers() {
    return this.http.get(`${this.API_URL}/servers/count`);
  }

  public countProjects() {
    return this.http.get(`${this.API_URL}/projects/count`);
  }

  public countFlux() {
    return this.http.get(`${this.API_URL}/fluxs/count`);
  }
}
