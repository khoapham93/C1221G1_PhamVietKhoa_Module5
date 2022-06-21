import {Location} from './location';

export interface Bus {
  id: number;
  busType: string;
  owner: string;
  startLocation: Location;
  arriveLocation: Location;
  phone: string;
  email: string;
  timeStart: string;
  timeArrive: string;
  status?: boolean;
}
