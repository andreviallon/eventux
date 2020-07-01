import { EventService } from '../../event.service';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { IEvent, IEventOverview } from './event.model';
import { InitEventState, DeleteEvent, EditEvent } from './event.actions';
import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';

export class EventStateModel {
  events: IEvent[];
}

@State<EventStateModel>({
  name: 'events'
})

@Injectable()
export class EventState {

  constructor(private eventService: EventService) { }

  @Selector()
  static getEvents(state: EventStateModel) {
    return state.events;
  }

  @Selector()
  static getEventsOverview(state: EventStateModel): IEventOverview[] {
    let eventsOverview: IEventOverview[] = [];
    eventsOverview = state.events.map(event => {
      return {
        _id: event._id,
        properties: [
          {
            title: 'name',
            content: event.title
          },
          {
            title: 'date',
            content: event.date
          },
          {
            title: 'teacher',
            content: `${event.teacher.firstName} ${event.teacher.lastName}`
          },
          {
            title: 'venue',
            content: event.location.name
          },
          {
            title: 'city',
            content: event.location.city
          }
        ]
      }
    })
    return eventsOverview;
  }

  @Action(InitEventState)
  initState({ patchState }: StateContext<EventStateModel>, { }: InitEventState) {
    const events = this.eventService.getEvents();

    patchState({
      events: events,
    })
  }

  @Action(EditEvent)
  @ImmutableContext()
  editEvent({ setState }: StateContext<EventStateModel>, { id }: EditEvent) {
    setState((state: EventStateModel) => {
      return state;
    });
  }

  @Action(DeleteEvent)
  @ImmutableContext()
  deleteEvent({ setState }: StateContext<EventStateModel>, { id }: DeleteEvent) {
    setState((state: EventStateModel) => {
      return state;
    });
  }
}
