import {Injectable} from '@angular/core';
import {RentType} from './RentType';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private rentTypes: RentType[] = [
    {
      id: 1,
      rentType: 'Năm'
    },
    {
      id: 2,
      rentType: 'Tháng'
    },
    {
      id: 3,
      rentType: 'Ngày'
    },
    {
      id: 4,
      rentType: 'Giờ'
    }
  ];

  public getAllRentType() {
    return this.rentTypes;
  }
}