import { IEventOverview } from 'src/app/state/event/event.model';
import { Injectable } from '@angular/core';
import { IEvent } from './state/event/event.model';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private events: IEvent[] = [
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
      venue: {
        _id: '123',
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030,
        img: 'imgUrl',
        website: 'https://blank-venue.dk/'
      },
      teacher: {
        _id: '123',
        firstName: 'John',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        email: 'johndoe@gmail.com',
        phoneNumber: 30303030
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
      venue: {
        _id: '123',
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030,
        img: 'imgUrl',
        website: 'https://blank-venue.dk/'
      },
      teacher: {
        _id: '123',
        firstName: 'John',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        email: 'johndoe@gmail.com',
        phoneNumber: 30303030
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
      venue: {
        _id: '123',
        name: 'Blank Venue & Pop-up',
        address: 'H. C. Andersens Blvd. 11, 1. th',
        city: 'Copenhagen',
        zipcode: '1553',
        country: 'Denmark',
        phoneNumber: 30303030,
        img: 'imgUrl',
        website: 'https://blank-venue.dk/'
      },
      teacher: {
        _id: '123',
        firstName: 'John',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        email: 'johndoe@gmail.com',
        phoneNumber: 30303030
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
      venue: {
        _id: '456',
        name: 'Hotel Oasia',
        address: 'Kriegersvej 27',
        city: 'Aarhus',
        zipcode: '8000',
        country: 'Denmark',
        phoneNumber: 87323715,
        img: 'imgUrl',
        website: 'https://www.hoteloasia.com/business/meeting-and-conference-rooms/'
      },
      teacher: {
        _id: '456',
        firstName: 'Jane',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        email: 'janedoe@gmail.com',
        phoneNumber: 30303030
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
      venue: {
        _id: '456',
        name: 'Hotel Oasia',
        address: 'Kriegersvej 27',
        city: 'Aarhus',
        zipcode: '8000',
        country: 'Denmark',
        phoneNumber: 87323715,
        img: 'imgUrl',
        website: 'https://www.hoteloasia.com/business/meeting-and-conference-rooms/'
      },
      teacher: {
        _id: '456',
        firstName: 'Jane',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        email: 'janedoe@gmail.com',
        phoneNumber: 30303030
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
      venue: {
        _id: '456',
        name: 'Hotel Oasia',
        address: 'Kriegersvej 27',
        city: 'Aarhus',
        zipcode: '8000',
        country: 'Denmark',
        phoneNumber: 87323715,
        img: 'imgUrl',
        website: 'https://www.hoteloasia.com/business/meeting-and-conference-rooms/'
      },
      teacher: {
        _id: '456',
        firstName: 'Jane',
        lastName: 'Doe',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        img: './src/app/assets/john-doe-avatar.png',
        email: 'janedoe@gmail.com',
        phoneNumber: 30303030
    }
    }
  ];

  private eventsOverview: IEventOverview[] = [
    {
      _id: '123',
      properties: [
        {
          title: 'name',
          content: 'React context and hooks'
        },
        {
          title: 'date',
          content: '03/04/2020'
        },
        {
          title: 'teacher',
          content: 'John Doe'
        },
        {
          title: 'venue',
          content: 'Blank Venue & Pop-up'
        },
        {
          title: 'city',
          content: 'Copenhagen'
        }
      ]
    },
    {
      _id: '456',
      properties: [
        {
          title: 'name',
          content: 'Another Event'
        },
        {
          title: 'date',
          content: '15/05/2020'
        },
        {
          title: 'teacher',
          content: 'Jane Doe'
        },
        {
          title: 'venue',
          content: 'Hotel Oasia'
        },
        {
          title: 'city',
          content: 'Aarhus'
        }
      ]
    }
  ];

  public getEvents(): IEvent[] {
    return this.events;
  }

  public getEvent(id: string): IEvent {
    return this.events.find(event => event._id === id);
  }

  public getEventsOverview(): IEventOverview[] {
    return this.eventsOverview;
  }

  public getRelatedEvents(): IEvent[] {
    return this.events.slice(0, 6);
  }
}
