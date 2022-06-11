import {Customer} from './Customer';
import {Facility} from './Facility';

export interface Contract {
  id: number;
  customer?: Customer;
  facility?: Facility;
  startDate: string;
  endDate: string;
  deposit: number;
  total?: number;
  serviceInclude?: string;
}
