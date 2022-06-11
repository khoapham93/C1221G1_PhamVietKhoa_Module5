import {Person} from './Person';
import {CustomerType} from './CustomerType';

export interface Customer extends Person {
  code: string;
  customerType: CustomerType;
  gender: number;
}
