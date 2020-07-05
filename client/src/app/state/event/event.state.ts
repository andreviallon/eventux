import { EventService } from '../../event.service';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { IEvent } from './event.model';
import { InitEventState, DeleteEvent, EditEvent } from './event.actions';
import { Injectable } from '@angular/core';

export class EventStateModel {
  events: IEvent[];
  relatedEvents: IEvent[];
}

export const EVENT_STATE = new StateToken<EventStateModel>('eventState');

@State<EventStateModel>({
  name: EVENT_STATE
})

@Injectable()
export class EventState {

  constructor(private eventService: EventService) { }

  @Selector()
  static getEvents(state: EventStateModel) {
    return state.events;
  }

  @Selector()
  static getRelatedEvent(state: EventStateModel) {
    return state.relatedEvents;
  }

  static getEvent(id: string) {
    return createSelector(
      [EVENT_STATE],
      (state: EventStateModel): IEvent => {
        return state.events.find(event => event._id === id);
      }
    );
  }


  @Action(InitEventState)
  initState({ patchState }: StateContext<EventStateModel>, { }: InitEventState) {
    const events = this.eventService.getEvents();

    patchState({
      events: events,
      relatedEvents: events
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
