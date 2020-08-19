import { VENUE_STATE } from './../venue/venue.state';
import { TEACHER_STATE } from './../teacher/teacher.state';
import { IEventOverview } from 'src/app/state/event/event.model';
import { EventService } from '../../event.service';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { IEvent, IEventIncTeacherAndVenue } from './event.model';
import { InitEventState, DeleteEvent, EditEvent } from './event.actions';
import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import axios from 'axios';

export class EventStateModel {
  events: IEvent[];
  eventsOverview: IEventOverview[];
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
  static getEventsOverview(state: EventStateModel) {
    return state.eventsOverview;
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

  static getEventsIncTeacherAndVenue() {
    return createSelector(
      [EVENT_STATE, TEACHER_STATE, VENUE_STATE],
      (state: EventStateModel, teacherState, venueState): IEventIncTeacherAndVenue[] => {
        return state.events.map(event => {
          const teacher = teacherState.teachers.filter(t => t._id === event.teacherId);
          const venue = venueState.venues.filter(v => v._id === event.venueId);

          return {
            _id: event._id,
            title: event.title,
            description: event.description,
            courseDate: event.courseDate,
            startTime: event.startTime,
            endTime: event.endTime,
            price: event.price,
            tags: event.tags,
            img: event.img,
            venue: venue[0],
            teacher: teacher[0]
          };
        });
      }
    );
  }

  static getEventIncTeacherAndVenue(id: string) {
    return createSelector(
      [EVENT_STATE, TEACHER_STATE, VENUE_STATE],
      (state: EventStateModel, teacherState, venueState): IEventIncTeacherAndVenue => {
        const event = state.events.find(e => e._id === id);
        const teacher = teacherState.teachers.filter(t => t._id === event.teacherId);
        const venue = venueState.venues.filter(v => v._id === event.venueId);

        return {
          _id: event._id,
          title: event.title,
          description: event.description,
          courseDate: event.courseDate,
          startTime: event.startTime,
          endTime: event.endTime,
          price: event.price,
          tags: event.tags,
          img: event.img,
          venue: venue[0],
          teacher: teacher[0]
        };
      }
    );
  }

  @Action(InitEventState)
  @ImmutableContext()
  async initState({ setState }: StateContext<EventStateModel>, { }: InitEventState) {

    try {
      const events = await axios.get('api/v1/events');
      const eventsOverview = this.eventService.getEventsOverview();

      setState((state: EventStateModel) => {
        state.events = events.data.data;
        state.eventsOverview = eventsOverview;
        state.relatedEvents = events.data.data;
        return state;
      });

    } catch(err) {
      console.log('err', err);
    }
  }

  @Action(EditEvent)
  editEvent({ patchState }: StateContext<EventStateModel>, { id }: EditEvent) {
    patchState({
    });
  }

  @Action(DeleteEvent)
  deleteEvent({ patchState }: StateContext<EventStateModel>, { id }: DeleteEvent) {
    patchState({
    });
  }
}
