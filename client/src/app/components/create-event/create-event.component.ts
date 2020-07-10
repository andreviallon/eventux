import { InitTeacherState } from './../../state/teacher/teacher.actions';
import { ITeacher } from './../../state/teacher/teacher.model';
import { TeacherState } from './../../state/teacher/teacher.state';
import { IVenue } from './../../state/venue/venue.model';
import { VenueState } from './../../state/venue/venue.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InitVenueState } from 'src/app/state/venue/venue.actions';
import { IEventForm, IEvent } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public title = 'Add Event';
  public submitFormBtnText = 'Create Event';
  public defaultEvent: IEventForm = {
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    price: 0,
    tags: [],
    img: '',
    venueId: '',
    teacherId: ''
  };

  @Select(VenueState.getVenues) venues$: Observable<IVenue[]>;
  @Select(TeacherState.getTeachers) teachers$: Observable<ITeacher[]>;

  constructor(private store: Store) {

  }

  public ngOnInit(): void {
    this.store.dispatch(new InitVenueState());
    this.store.dispatch(new InitTeacherState());
  }

  public createEvent(event: IEventForm): void {
    console.log(event);
  }
}
