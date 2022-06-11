import {Facility} from '../model/Facility';

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

export const facilities: Facility[] = [
  {
    id: 1,
    name: 'River side 1',
    image: randomImage(),
    rentType: {
      id: 1,
      rentType: 'day'
    },
    rentalFee: 1500000.0
  },
  {
    id: 2,
    name: 'River side 2',
    image: randomImage(),
    rentType: {
      id: 1,
      rentType: 'day'
    },
    rentalFee: 1000000.0
  },
  {
    id: 3,
    name: 'Villa River side',
    image: randomImage(),
    rentType: {
      id: 1,
      rentType: 'day'
    },
    rentalFee: 2500000.0
  },
  {
    id: 4,
    name: 'Room street view',
    image: randomImage(),
    rentType: {
      id: 1,
      rentType: 'day'
    },
    rentalFee: 1500000.0
  },
  {
    id: 5,
    name: 'House 1',
    image: randomImage(),
    rentType: {
      id: 1,
      rentType: 'day'
    },
    rentalFee: 1500000.0
  },
  {
    id: 6,
    name: 'Villa Vip 1',
    image: randomImage(),
    rentType: {
      id: 1,
      rentType: 'day'
    },
    rentalFee: 3500000.0
  }
];
