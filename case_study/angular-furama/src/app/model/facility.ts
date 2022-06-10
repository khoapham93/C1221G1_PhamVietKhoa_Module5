import {FacilityType} from './FacilityType';
import {RentType} from './RentType';

export interface Facility {
  id: number;
  code: string;
  name: string;
  image: string;
  floorSquare: number;
  rentalFee: number;
  maximumPeople: number;
  roomStandard?: string;
  description?: string;
  poolSquare?: number;
  numberFloor?: number;
  facilityType: FacilityType;
  rentType: RentType;
  freeServiceInclude?: string;
}
