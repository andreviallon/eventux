import { Injectable } from '@angular/core';
import { IEvent } from './state/event.model';

const map = [
  { lat: 55, long: 56},
  { lat: 55, long: 56 },
  { lat: 55, long: 56 },
]

@Injectable({
  providedIn: 'root'
})

export class EventService {

  events: IEvent[] = [
    {
      _id: '1',
      title: 'Reack context API and hooks 101',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      date: '12 Dec 2020',
      startTime: '10.00',
      endTime: '12.00',
      price: 120,
      img: './assets/event-image.png',
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      location: {
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030
      },
      teacher: {
        _id: '123',
        firstName: 'John',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        socialLink: 'johndoe'
      }
    },
    {
      _id: '2',
      title: 'Event 2',
      description: 'Event 2 description',
      date: '13 Dec 2020',
      startTime: '11.00',
      endTime: '15.00',
      price: 100,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      img: './assets/event-image.png',
      location: {
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030
      },
      teacher: {
        _id: '123',
        firstName: 'John',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: '',
        socialLink: 'johndoe'
      }
    },
    {
      _id: '3',
      title: 'Event 3',
      description: 'Event 3 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 100,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      img: './assets/event-image.png',
      location: {
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030
      },
      teacher: {
        _id: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: '',
        socialLink: 'johndoe'
      }
    },
    {
      _id: '4',
      title: 'Event 4',
      description: 'Event 4 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 90,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      img: './assets/event-image.png',
      location: {
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030
      },
      teacher: {
        _id: '456',
        firstName: 'Andre',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        lastName: 'Viallon',
        img: '',
        socialLink: 'johndoe'
      }
    },
    {
      _id: '5',
      title: 'Event 5',
      description: 'Event 5 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 90,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      img: './assets/event-image.png',
      location: {
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030
      },
      teacher: {
        _id: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: '',
        socialLink: 'johndoe'
      }
    },
    {
      _id: '6',
      title: 'Event 6',
      description: 'Event 6 description',
      date: '15 Dec 2020',
      startTime: '09.00',
      endTime: '12.00',
      price: 90,
      tags: ['React', 'JavaScript', 'Frontend Dev'],
      img: './assets/event-image.png',
      location: {
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030
      },
      teacher: {
        _id: '456',
        firstName: 'Andre',
        lastName: 'Viallon',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: '',
        socialLink: 'johndoe'
      }
    }
  ];

  constructor() { }

  public getEvents(): IEvent[] {
    return this.events;
  }

  public getEvent(id): IEvent {
    return this.events.find(event => event._id === id);
  }

  public getRelatedEvents(): IEvent[] {
    return this.events.slice(0, 6);
  }
}
