export interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  tags: string[];
  img: string;
  location: {
    name: string;
    address: string;
    city: string;
    zipcode: string;
    country: string;
    phoneNumber: number;
  }
  teacher: {
    _id: string;
    firstName: string;
    lastName: string;
    description: string;
    img: string;
    socialLink: string;
  }
}
