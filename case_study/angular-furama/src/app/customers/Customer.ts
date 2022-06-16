import {Person} from './Person';
import {CustomerType} from './CustomerType';

export interface Customer extends Person {
  customerCode: string;
  customerType: CustomerType;
  gender: number;
}
