import {Injectable} from '@angular/core';

import {FacilityType} from './FacilityType';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  // private facilityTypes: FacilityType[] = [
  //   {
  //     id: 1,
  //     facilityType: 'villa'
  //   },
  //   {
  //     id: 2,
  //     facilityType: 'house'
  //   },
  //   {
  //     id: 3,
  //     facilityType: 'room'
  //   }
  // ];
  constructor(private http: HttpClient) {
  }

  public getAllFacilityType(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(`${API_URL}/facilityTypes`);
  }

}
