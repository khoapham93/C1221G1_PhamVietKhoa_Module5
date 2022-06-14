import {Customer} from '../customers/Customer';
import {Facility} from '../facilities/Facility';

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
