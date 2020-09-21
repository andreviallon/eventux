import { VENUE_STATE } from './../venue/venue.state';
import { TEACHER_STATE } from './../teacher/teacher.state';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { IEvent, IEventIncTeacherAndVenue, IEventOverview } from './event.model';
import { InitEventState, DeleteEvent, EditEvent, SelectEvent, CreateEvent } from './event.actions';
import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { ITeacher } from '../teacher/teacher.model';
import { IVenue } from '../venue/venue.model';
import axios from 'axios';

export const createEventIncTeacherAndVenue = (event: IEvent, teacher: ITeacher, venue: IVenue): IEventIncTeacherAndVenue => {
  return {
    _id: event._id,
    title: event.title,
    description: event.description,
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime,
    price: event.price,
    tags: event.tags,
    img: event.img,
    venue,
    teacher
  };
};

export class EventStateModel {
  events: IEvent[];
  selectedEventId: string;
}

export const EVENT_STATE = new StateToken<EventStateModel>('eventState');

@State<EventStateModel>({
  name: EVENT_STATE
})

@Injectable()
export class EventState {

  @Selector()
  static getEvents(state: EventStateModel): IEvent[] {
    return state.events;
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

          return createEventIncTeacherAndVenue(event, teacher[0], venue[0]);
        });
      }
    );
  }

  static getSelectedEvent() {
    return createSelector(
      [EVENT_STATE, TEACHER_STATE, VENUE_STATE],
      (state: EventStateModel, teacherState, venueState): IEventIncTeacherAndVenue => {
        const event = state.events.find(e => e._id === state.selectedEventId);
        const teacher = teacherState.teachers.filter(t => t._id === event.teacherId);
        const venue = venueState.venues.filter(v => v._id === event.venueId);

        return createEventIncTeacherAndVenue(event, teacher[0], venue[0]);
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

        return createEventIncTeacherAndVenue(event, teacher[0], venue[0]);
      }
    );
  }

  static getUpcomingEvents() {
    return createSelector(
      [EVENT_STATE, TEACHER_STATE, VENUE_STATE],
      (state: EventStateModel, teacherState, venueState): IEventIncTeacherAndVenue[] => {
        return state.events.slice(0, 6).map(event => {
          const teacher = teacherState.teachers.filter(t => t._id === event.teacherId);
          const venue = venueState.venues.filter(v => v._id === event.venueId);

          return createEventIncTeacherAndVenue(event, teacher[0], venue[0]);
        });
      }
    );
  }

  static getEventsOverview() {
    return createSelector(
      [EVENT_STATE, TEACHER_STATE, VENUE_STATE],
      (state: EventStateModel, teacherState, venueState): IEventOverview[] => {
        return state.events.map(event => {
          const teacher = teacherState.teachers.filter(t => t._id === event.teacherId);
          const venue = venueState.venues.filter(v => v._id === event.venueId);

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
                content: `${teacher[0].firstName} ${teacher[0].lastName}`
              },
              {
                title: 'venue',
                content: venue[0].address
              },
              {
                title: 'city',
                content: venue[0].city
              }
            ]
          };
        });
      }
    );
  }

  @Action(InitEventState)
  @ImmutableContext()
  async initState({ setState }: StateContext<EventStateModel>, { }: InitEventState) {
    try {
      const eventsResponse = await axios.get('api/v1/events');
      const event = eventsResponse.data.data;

      setState((state: EventStateModel) => {
        state.events = event;
        return state;
      });

    } catch (err) {
      throw err;
    }
  }

  @Action(SelectEvent)
  @ImmutableContext()
  async selectEvent({ setState }: StateContext<EventStateModel>, { id }: SelectEvent) {
      setState((state: EventStateModel) => {
        state.selectedEventId = id;
        return state;
      });
  }

  @Action(CreateEvent)
  @ImmutableContext()
  async createEvent({ setState }: StateContext<EventStateModel>, { event }: CreateEvent) {
    try {
      console.log('event used for request', event);
      const eventsResponse = await axios.post('api/v1/events', event);
      console.log('eventsResponse', eventsResponse);
      // const newEvent = eventsResponse.data.data;
      // console.log('newEvent', newEvent);

      setState((state: EventStateModel) => {
        return state;
      });

    } catch (err) {
      throw err;
    }
  }

  @Action(EditEvent)
  @ImmutableContext()
  async editEvent({ setState }: StateContext<EventStateModel>, { event }: EditEvent) {
    try {
      const eventsResponse = await axios.patch(`api/v1/events/${event._id}`, event);
      const updatedEvent = eventsResponse.data.data;

      setState((state: EventStateModel) => {
        const foundIndex = state.events.findIndex(e => e._id === updatedEvent._id);
        state.events[foundIndex] = updatedEvent;
        return state;
      });

    } catch (err) {
      throw err;
    }
  }

  @Action(DeleteEvent)
  deleteEvent({ patchState }: StateContext<EventStateModel>, { id }: DeleteEvent) {
    patchState({
    });
  }
}
