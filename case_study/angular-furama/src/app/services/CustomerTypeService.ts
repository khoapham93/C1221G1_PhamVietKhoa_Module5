import {CustomerType} from '../model/CustomerType';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerTypeService {
  private customerTypes: CustomerType[] = [
    {
      id: 1,
      type: 'Kim Cương'
    },
    {
      id: 2,
      type: 'Bạch kim'
    },
    {
      id: 3,
      type: 'Vàng'
    },
    {
      id: 4,
      type: 'Bạc'
    },
    {
      id: 5,
      type: 'Tìm Năng'
    }
  ];

  public getAllCustomerType(): CustomerType[] {
    return this.customerTypes;
  }
}
