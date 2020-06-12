import { EventService } from './../event.service';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { IEvent } from './event.model';
import { InitState } from './event.actions';
import { Injectable } from '@angular/core';

export class EventStateModel {
  events: IEvent[];
  relatedEvents: IEvent[];
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

  @Action(InitState)
  initState({ patchState }: StateContext<EventStateModel>, { }: InitState) {
    const events = this.eventService.getEvents();

    patchState({
      events: events
    })
  }
}
