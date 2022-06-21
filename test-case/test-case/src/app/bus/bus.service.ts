import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from './bus';
import {Page} from 'ngx-pagination/dist/pagination-controls.directive';

const API_URL = 'http://localhost:8080';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Accept-Charset': ' utf-8'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) {
  }

  public getAll(request): Observable<any> {
    const params = request;
    return this.http.get<Page>(`${API_URL}/buses`, {params});
  }

  public delete(bus: Bus): Observable<Bus> {
    return this.http.delete<Bus>(`${API_URL}/buses/${bus.id}`);
  }

  public findById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${API_URL}/buses/${id}`);
  }

  public save(bus: Bus): Observable<Bus> {
    bus.status = true;
    if (bus.id === undefined) {
      return this.http.post<Bus>(`${API_URL}/buses`, bus);
    } else {
      return this.http.patch<Bus>(`${API_URL}/buses/${bus.id}`, bus);
    }
  }

}
