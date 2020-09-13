import { IVenue } from '../venue/venue.model';
import { ITeacher } from '../teacher/teacher.model';

export interface IEventIncTeacherAndVenue {
  _id?: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  tags?: string[];
  img: string;
  venue: IVenue;
  teacher: ITeacher;
}

export interface IEvent {
  _id?: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  tags?: string[];
  img: string;
  venueId: string;
  teacherId: string;
}

export interface IEventOverview {
  _id: string;
  properties: IEventProperty[];
}

export interface IEventProperty {
  title: string;
  content: string;
}
