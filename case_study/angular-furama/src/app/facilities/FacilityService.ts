import {Injectable} from '@angular/core';
import {Facility} from './Facility';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000';


const imageArray: string[] = [
  '../../../assets/img/home/explore1.png',
  '../../../assets/img/home/explore2.png',
  '../../../assets/img/home/explore3.png',
  '../../../assets/img/home/explore4.png',
  '../../../assets/img/home/explore5.png',
  '../../../assets/img/home/explore6.png',
];

function randomImage(): string {
  return imageArray[Math.floor(Math.random() * imageArray.length)];
}

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  // private facilities: Facility[] = [
  //   {
  //     id: 1,
  //     code: 'DV-0001',
  //     name: 'Villa Beach Front',
  //     image: randomImage(),
  //     floorSquare: 2500,
  //     rentalFee: 10000000,
  //     maximumPeople: 10,
  //     roomStandard: 'vip',
  //     description: 'Có hồ bơi',
  //     poolSquare: 500,
  //     numberFloor: 4,
  //     freeServiceInclude: '',
  //     rentType: {
  //       id: 3,
  //       rentType: 'Ngày'
  //     },
  //     facilityType: {
  //       id: 1,
  //       facilityType: 'villa'
  //     }
  //   },
  //   {
  //     id: 2,
  //     code: 'DV-0002',
  //     name: 'House Princess 01',
  //     image: randomImage(),
  //     floorSquare: 140,
  //     rentalFee: 5000000,
  //     maximumPeople: 7,
  //     roomStandard: 'vip',
  //     description: 'Có thêm bếp nướng',
  //     poolSquare: 0,
  //     numberFloor: 3,
  //     freeServiceInclude: '',
  //     rentType: {
  //       id: 2,
  //       rentType: 'Tháng'
  //     },
  //     facilityType: {
  //       id: 2,
  //       facilityType: 'house'
  //     }
  //   },
  //   {
  //     id: 3,
  //     code: 'DV-0003',
  //     name: 'Room Twin 01',
  //     image: randomImage(),
  //     floorSquare: 50,
  //     rentalFee: 1000000,
  //     maximumPeople: 2,
  //     roomStandard: 'normal',
  //     description: 'Có tivi',
  //     poolSquare: 0,
  //     numberFloor: 0,
  //     freeServiceInclude: '',
  //     rentType: {
  //       id: 4,
  //       rentType: 'Giờ'
  //     },
  //     facilityType: {
  //       id: 3,
  //       facilityType: 'room'
  //     }
  //   },
  //   {
  //     id: 4,
  //     code: 'DV-0004',
  //     name: 'Villa No Beach Front',
  //     image: randomImage(),
  //     floorSquare: 2200,
  //     rentalFee: 9000000,
  //     maximumPeople: 8,
  //     roomStandard: 'normal',
  //     description: 'Có hồ bơi',
  //     poolSquare: 300,
  //     numberFloor: 3,
  //     freeServiceInclude: '',
  //     rentType: {
  //       id: 3,
  //       rentType: 'Ngày'
  //     },
  //     facilityType: {
  //       id: 1,
  //       facilityType: 'villa'
  //     }
  //   },
  //   {
  //     id: 5,
  //     code: 'DV-0005',
  //     name: 'House Princess 02',
  //     image: randomImage(),
  //     floorSquare: 100,
  //     rentalFee: 4000000,
  //     maximumPeople: 5,
  //     roomStandard: 'normal',
  //     description: 'Có thêm bếp nướng',
  //     poolSquare: 0,
  //     numberFloor: 2,
  //     freeServiceInclude: '',
  //     rentType: {
  //       id: 3,
  //       rentType: 'Ngày'
  //     },
  //     facilityType: {
  //       id: 2,
  //       facilityType: 'house'
  //     }
  //   },
  //   {
  //     id: 6,
  //     code: 'DV-0006',
  //     name: 'Room Twin 02',
  //     image: randomImage(),
  //     floorSquare: 30,
  //     rentalFee: 900000,
  //     maximumPeople: 2,
  //     roomStandard: 'normal',
  //     description: 'Có tivi',
  //     poolSquare: 0,
  //     numberFloor: 0,
  //     freeServiceInclude: '',
  //     rentType: {
  //       id: 4,
  //       rentType: 'Giờ'
  //     },
  //     facilityType: {
  //       id: 3,
  //       facilityType: 'room'
  //     }
  //   }
  // ];

  constructor(private http: HttpClient) {
  }

  public getAllFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${API_URL}/facilities`);
  }

  public findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  public save(facility: Facility): Observable<Facility> {
    facility.image = randomImage();
    if (facility.id === undefined) {
      return this.http.post<Facility>(`${API_URL}/facilities`, facility);
    } else {
      return this.http.patch<Facility>(`${API_URL}/facilities/${facility.id}`, facility);
    }
  }

  public delete(facility: Facility): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${facility.id}`);
  }
}
