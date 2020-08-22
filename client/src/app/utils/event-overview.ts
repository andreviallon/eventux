import { IEventOverview, IEventIncTeacherAndVenue } from '../state/event/event.model';

export function getEventOverview(event: IEventIncTeacherAndVenue): IEventOverview {
  return {
    _id: event._id,
    properties: [
      {
        title: 'name',
        content: event.title
      },
      {
        title: 'date',
        content: `${event.courseDate.day}/${event.courseDate.month}/${event.courseDate.year}`
      },
      {
        title: 'teacher',
        content: `${event.teacher.firstName} ${event.teacher.lastName}`
        },
      {
        title: 'venue',
        content: event.venue.address
      },
      {
        title: 'city',
        content: event.venue.city
      }
    ]
  };
}
