import {CustomerType} from './CustomerType';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  // private customerTypes: CustomerType[] = [
  //   {
  //     id: 1,
  //     type: 'Kim Cương'
  //   },
  //   {
  //     id: 2,
  //     type: 'Bạch kim'
  //   },
  //   {
  //     id: 3,
  //     type: 'Vàng'
  //   },
  //   {
  //     id: 4,
  //     type: 'Bạc'
  //   },
  //   {
  //     id: 5,
  //     type: 'Tìm Năng'
  //   }
  // ];
  constructor(private http: HttpClient) {
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(`${API_URL}/customerTypes`);
  }
}
