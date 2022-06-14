import {Injectable} from '@angular/core';
import {Contract} from './Contract';

@Injectable({providedIn: 'root'})
export class ContractService {
  private contracts: Contract[] = [
    {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: 1,
        code: 'KH-0001',
        name: 'Nguyễn Thị Hào',
        birthday: '1970-11-07',
        gender: 0,
        idCard: '643431213',
        phone: '0905423362',
        email: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          type: 'Tìm năng'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01',
        floorSquare: 50,
        rentalFee: 1000000,
        maximumPeople: 2,
        roomStandard: 'normal',
        description: 'Có tivi',
        poolSquare: 0,
        numberFloor: 0,
        freeServiceInclude: '',
        rentType: {
          id: 4,
          rentType: 'Giờ'
        },
        facilityType: {
          id: 3,
          facilityType: 'room'
        }
      },
      serviceInclude: 'karaoke, buffet sáng, buffet tối, thuê xe đạp'
    },
    {
      id: 2,
      startDate: '2020-07-14',
      endDate: '2020-07-21',
      deposit: 200000,
      total: 2000000,
      customer: {
        id: 3,

        code: 'KH-0003',

        name: 'Trương Đình Nghệ',

        birthday: '1990-02-27',

        gender: 1,

        idCard: '488645199',

        phone: '0373213122',

        email: 'nghenhan2702@gmail.com',

        address: 'K323/12 Ông Ích Khiêm, Vinh',

        customerType: {
          id: 3,
          type: 'Vàng'
        }
      },
      facility: {
        id: 1,
        code: 'DV-0001',
        name: 'Villa Beach Front',
        floorSquare: 2500,
        rentalFee: 10000000,
        maximumPeople: 10,
        roomStandard: 'vip',
        description: 'Có hồ bơi',
        poolSquare: 500,
        numberFloor: 4,
        freeServiceInclude: '',
        rentType: {
          id: 3,
          rentType: 'Ngày'
        },
        facilityType: {
          id: 1,
          facilityType: 'villa'
        }
      },
      serviceInclude: 'karaoke, buffet sáng, buffet tối'
    },
    {
      id: 3,
      startDate: '2021-03-15',
      endDate: '2021-03-17',
      deposit: 50000,
      total: 1500000,
      customer: {
        id: 4,

        code: 'KH-0004',

        name: 'Dương Văn Quan',

        birthday: '1981-07-08',

        gender: 1,

        idCard: '543432111',

        phone: '0490039241',

        email: 'duongquan@gmail.com',

        address: 'K453/12 Lê Lợi, Đà Nẵng',

        customerType: {
          id: 1,
          type: 'Kim cương'
        }
      },
      facility: {
        id: 2,
        code: 'DV-0002',
        name: 'House Princess 01',
        floorSquare: 140,
        rentalFee: 5000000,
        maximumPeople: 7,
        roomStandard: 'vip',
        description: 'Có thêm bếp nướng',
        poolSquare: 0,
        numberFloor: 3,
        freeServiceInclude: '',
        rentType: {
          id: 2,
          rentType: 'Tháng'
        },
        facilityType: {
          id: 2,
          facilityType: 'house'
        }
      },
      serviceInclude: 'karaoke, buffet tối, thuê xe máy'
    },
    {
      id: 4,
      startDate: '2021-01-14',
      endDate: '2021-01-18',
      deposit: 100000,
      total: 1400000,
      customer: {
        id: 5,

        code: 'KH-0005',

        name: 'Hoàng Trần Nhi Nhi',

        birthday: '1995-12-09',

        gender: 0,

        idCard: '795453345',

        phone: '0312345678',

        email: 'nhinhi123@gmail.com',

        address: '224 Lý Thái Tổ, Gia Lai',

        customerType: {
          id: 1,
          type: 'Kim cương'
        }
      },
      facility: {
        id: 5,
        code: 'DV-0005',
        name: 'House Princess 02',
        floorSquare: 100,
        rentalFee: 4000000,
        maximumPeople: 5,
        roomStandard: 'normal',
        description: 'Có thêm bếp nướng',
        poolSquare: 0,
        numberFloor: 2,
        freeServiceInclude: '',
        rentType: {
          id: 3,
          rentType: 'Ngày'
        },
        facilityType: {
          id: 2,
          facilityType: 'house'
        }
      },
      serviceInclude: 'karaoke, buffet sáng, buffet tối, thuê xe đạp'
    },
    {
      id: 5,
      startDate: '2021-07-14',
      endDate: '2021-07-15',
      deposit: 0,
      total: 100000,
      customer: {
        id: 2,
        code: 'KH-0002',

        name: 'Phạm Xuân Diệu',

        birthday: '1992-08-08',

        gender: 1,

        idCard: '865342123',

        phone: '0954333333',

        email: 'xuandieu92@gmail.com',

        address: 'K77/22 Thái Phiên, Quảng Trị',

        customerType: {
          id: 4,
          type: 'Bạc'
        }
      },
      facility: {
        id: 6,
        code: 'DV-0006',
        name: 'Room Twin 02',
        floorSquare: 30,
        rentalFee: 900000,
        maximumPeople: 2,
        roomStandard: 'normal',
        description: 'Có tivi',
        poolSquare: 0,
        numberFloor: 0,
        freeServiceInclude: '',
        rentType: {
          id: 4,
          rentType: 'Giờ'
        },
        facilityType: {
          id: 3,
          facilityType: 'room'
        }
      }
    }
  ];

  public getAllContract() {
    return this.contracts;
  }

  public findById(id: number): Contract {
    return this.contracts.find(contract => contract.id === id);
  }

  public save(contract: Contract): void {
    console.log(contract);
    let check = false;
    if (contract.id === undefined) {
      contract.id = this.contracts.length + 1;
      this.contracts.push(contract);
      check = true;
    } else {
      for (let i = 0; i < this.contracts.length; i++) {
        if (this.contracts[i].id === contract.id) {
          this.contracts[i] = contract;
          check = true;
          break;
        }
      }
    }
    if (check !== true) {
      alert('Something went wrong. Please try again!');
    }
  }

  public delete(contract: Contract) {
    this.contracts = this.contracts.filter(element => {
      return element.id !== contract.id;
    });
  }
}
