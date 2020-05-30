import { Injectable } from '@angular/core';

export interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  tags: string[];
  location: {
    address: string;
    city: string;
    zipcode: string;
    country: string;
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '12 Dec 2020',
      startTime: '10.00',
      endTime: '12.00',
      price: 120.00,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        address: 'Jernbanegade, 201',
        city: 'Kolding',
        zipcode: '6000',
        country: 'Denmark'
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
      price: 100.00,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        address: 'Jernbanegade, 201',
        city: 'Kolding',
        zipcode: '6000',
        country: 'Denmark'
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
      price: 100.00,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        address: 'Jernbanegade, 201',
        city: 'Kolding',
        zipcode: '6000',
        country: 'Denmark'
      },
      tutor: {
        _tutorId: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        img: ''
      }
    },
    {
      _id: '4',
      title: 'Event 4',
      description: 'Event 4 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 90.00,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        address: 'Jernbanegade, 201',
        city: 'Kolding',
        zipcode: '6000',
        country: 'Denmark'
      },
      tutor: {
        _tutorId: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        img: ''
      }
    },
    {
      _id: '5',
      title: 'Event 5',
      description: 'Event 5 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 90.00,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        address: 'Jernbanegade, 201',
        city: 'Kolding',
        zipcode: '6000',
        country: 'Denmark'
      },
      tutor: {
        _tutorId: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        img: ''
      }
    },
    {
      _id: '6',
      title: 'Event 6',
      description: 'Event 6 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 90.00,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        address: 'Jernbanegade, 201',
        city: 'Kolding',
        zipcode: '6000',
        country: 'Denmark'
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

  public getEvent(id) {
    return this.events.find(event => event._id === id);
  }
}
