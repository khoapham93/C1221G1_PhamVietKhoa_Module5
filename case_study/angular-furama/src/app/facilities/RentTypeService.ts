import {Injectable} from '@angular/core';
import {RentType} from './RentType';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  // private rentTypes: RentType[] = [
  //   {
  //     id: 1,
  //     rentType: 'Năm'
  //   },
  //   {
  //     id: 2,
  //     rentType: 'Tháng'
  //   },
  //   {
  //     id: 3,
  //     rentType: 'Ngày'
  //   },
  //   {
  //     id: 4,
  //     rentType: 'Giờ'
  //   }
  // ];

  constructor(private http: HttpClient) {
  }

  public getAllRentType(): Observable<RentType[]> {
    return this.http.get<RentType[]>(`${API_URL}/rentTypes`);
  }
}
