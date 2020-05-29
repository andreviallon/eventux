import { Injectable } from '@angular/core';

export interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  img: string;
  price: number;
  location: {
    city: string;
    country: string;
    street: string;
  }
  tutor: {
    _tutorId: string;
    firstName: string;
    lastName: string;
    img: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class EventService {

  events: IEvent[] = [
    {
      _id: '1',
      title: 'Event 1',
      description: 'Event 1 description',
      date: '12 Dec 2020',
      startTime: '10.00',
      endTime: '12.00',
      img: '',
      price: 120.00,
      location: {
        city: 'London',
        country: 'England',
        street: '21 baker street'
      },
      tutor: {
        _tutorId: '123',
        firstName: 'John',
        lastName: 'Doe',
        img: ''
      }
    },
    {
      _id: '2',
      title: 'Event 2',
      description: 'Event 2 description',
      date: '13 Dec 2020',
      startTime: '11.00',
      endTime: '15.00',
      img: '',
      price: 100.00,
      location: {
        city: 'London',
        country: 'England',
        street: '21 baker street'
      },
      tutor: {
        _tutorId: '123',
        firstName: 'John',
        lastName: 'Doe',
        img: ''
      }
    },
    {
      _id: '3',
      title: 'Event 3',
      description: 'Event 3 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      img: '',
      price: 90.00,
      location: {
        city: 'Copenhagen',
        country: 'Denmark',
        street: 'Some street'
      },
      tutor: {
        _tutorId: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        img: ''
      }
    }
  ];

  constructor() { }

  public getEvents() {
    return this.events;
  }
}
