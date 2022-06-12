import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
      id: 6,

      code: 'KH-0006',

      name: 'Tôn Nữ Mộc Châu',

      birthday: '2005-12-06',

      gender: 0,

      idCard: '732434215',

      phone: '0988888844',

      email: 'thihao07@gmail.com',

      address: '23 Nguyễn Hoàng, Đà Nẵng',

      customerType: {
        id: 5,
        type: 'Bạc'
      }
    },
    {
      id: 7,

      code: 'KH-0007',

      name: 'Nguyễn Mỹ Kim',

      birthday: '1984-04-08',

      gender: 0,

      idCard: '856453123',

      phone: '0912345698',

      email: 'thihao07@gmail.com',

      address: '23 Nguyễn Hoàng, Đà Nẵng',

      customerType: {
        id: 4,
        type: 'Bạc'
      }
    },
    {
      id: 8,

      code: 'KH-0008',

      name: 'Nguyễn Thị Hào',

      birthday: '1999-04-08',

      gender: 0,

      idCard: '965656433',

      phone: '0763212345',

      email: 'thihao07@gmail.com',

      address: '23 Nguyễn Hoàng, Đà Nẵng',

      customerType: {
        id: 3,
        type: 'Vàng'
      }
    },
    {
      id: 9,

      code: 'KH-0009',

      name: 'Trần Đại Danh',

      birthday: '1994-07-01',

      gender: 1,

      idCard: '432341235',

      phone: '0643343433',

      email: 'thihao07@gmail.com',

      address: '23 Nguyễn Hoàng, Đà Nẵng',

      customerType: {
        id: 2,
        type: 'Bạch Kim'
      }
    },
    {
      id: 10,

      code: 'KH-0010',

      name: 'Nguyễn Tâm Đắc',

      birthday: '1989-07-01',

      gender: 1,

      idCard: '344343432',

      phone: '0987654321',

      email: 'thihao07@gmail.com',

      address: '23 Nguyễn Hoàng, Đà Nẵng',

      customerType: {
        id: 1,
        type: 'Kim cương'
      }
    }
  ];

  public getAllCustomer(): Customer[] {
    return this.customers;
  }

  public findById(id: number): Customer {
    return this.customers.find(customer => customer.id === id);
  }

  public save(customer: Customer): void {
    console.log(customer);
    let check = false;
    if (customer.id === undefined) {
      customer.id = this.customers.length + 1;
      this.customers.push(customer);
      check = true;
    } else {
      for (let i = 0; i < this.customers.length; i++) {
        if (this.customers[i].id === customer.id) {
          this.customers[i] = customer;
          check = true;
          break;
        }
      }
    }
    if (check !== true) {
      alert('Something went wrong. Please try again!');
    }
  }

  public delete(customer: Customer) {
    let check = false;
    for (let i = 0; i < this.customers.length; i++) {
      if (customer[i].id === customer.id) {
        this.customers = this.customers.filter(element => {
          return element.id !== customer.id;
        });
        check = true;
        break;
      }
    }
    if (check !== true) {
      alert('Something went wrong. Please try again!');
    }
  }
}