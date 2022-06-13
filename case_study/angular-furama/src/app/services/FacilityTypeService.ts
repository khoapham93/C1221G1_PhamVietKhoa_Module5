import {Injectable} from '@angular/core';

import {FacilityType} from '../model/FacilityType';

@Injectable()
export class FacilityTypeService {
  private facilityTypes: FacilityType[] = [
    {
      id: 1,
      facilityType: 'villa'
    },
    {
      id: 2,
      facilityType: 'house'
    },
    {
      id: 3,
      facilityType: 'room'
    }
  ];

  public getAllFacilityType() {
    return this.facilityTypes;
  }

}
