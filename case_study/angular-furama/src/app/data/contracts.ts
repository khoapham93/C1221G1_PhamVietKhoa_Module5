import {Contract} from '../model/Contract';

export const contracts: Contract[] = [
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
        type: 'Member'
      }
    },
    facility: {
      id: 3,
      code: 'DV-0003',
      name: 'Room Twin 01'
    },
    serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
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
        type: 'Gold'
      }
    },
    facility: {
      id: 1,
      code: 'DV-0001',
      name: 'Villa Beach Front'
    },
    serviceInclude: 'karaoke, buffet sáng, thuê xe máy'
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
        id: 2,
        type: 'Platinium'
      }
    },
    facility: {
      id: 2,
      code: 'DV-0002',
      name: 'House Princess 01'
    },
    serviceInclude: 'karaoke, buffet sáng, buffet tối, thuê xe đạp'
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
        type: 'Diamond'
      }
    },
    facility: {
      id: 5,
      code: 'DV-0005',
      name: 'House Princess 02'
    }
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
        type: 'Silver'
      }
    },
    facility: {
      id: 6,
      code: 'DV-0006',
      name: 'Room Twin 02'
    },
    serviceInclude: 'karaoke, buffet sáng, buffet tối'
  }
];
