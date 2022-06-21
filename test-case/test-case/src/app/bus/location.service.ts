import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from './location';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(`${API_URL}/locations`);
  }
}
