import { ITeacher } from './../teacher/teacher.model';
import { IVenue } from './../venue/venue.model';

export interface IEvent {
  _id: string;
  title: string;
  description: string;
  courseDate: string;
  startTime: string;
  endTime: string;
  price: number;
  tags: string[];
  img: string;
  venue: IVenue;
  teacher: ITeacher;
}

export interface IEventForm {
  _id?: string;
  title: string;
  description: string;
  courseDate: ICourseDate;
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

export interface ICourseDate {
  day: number;
  month: number;
  year: number;
}
