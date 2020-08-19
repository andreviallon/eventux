import { IEventOverview } from 'src/app/state/event/event.model';
import { Injectable } from '@angular/core';
import { IEvent } from './state/event/event.model';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private events: IEvent[];

  private eventsOverview: IEventOverview[] = [
    {
      _id: '1',
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
      _id: '4',
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

  public async getEvents() {
    const events = await (await axios.get('api/v1/events')).data.data;

    console.log('axios =>', events);

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
