import { EventService } from '../../event.service';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { IEvent } from './event.model';
import { InitEventState, DeleteEvent, EditEvent, SelectEvent } from './event.actions';
import { Injectable } from '@angular/core';

export class EventStateModel {
  events: IEvent[];
  relatedEvents: IEvent[];
  event: IEvent;
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
  static getEvent(state: EventStateModel) {
    return state.event;
  }

  @Selector()
  static getRelatedEvent(state: EventStateModel) {
    return state.relatedEvents;
  }


  @Action(InitEventState)
  initState({ patchState }: StateContext<EventStateModel>, { }: InitEventState) {
    const events = this.eventService.getEvents();

    patchState({
      events: events,
      relatedEvents: events
    })
  }

  @Action(SelectEvent)
  selectEvent({ patchState }: StateContext<EventStateModel>, { eventId }: SelectEvent) {
    const event = this.eventService.getEvent(eventId);

    patchState({
      event: event
    })
  }


  @Action(EditEvent)
  editEvent({ patchState }: StateContext<EventStateModel>, { id }: EditEvent) {
    patchState({
    })
  }

  @Action(DeleteEvent)
  deleteEvent({ patchState }: StateContext<EventStateModel>, { id }: DeleteEvent) {
    patchState({
    })
  }
}
