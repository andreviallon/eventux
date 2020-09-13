import { ITeacher } from './../../state/teacher/teacher.model';
import { TeacherState } from './../../state/teacher/teacher.state';
import { IVenue } from './../../state/venue/venue.model';
import { VenueState } from './../../state/venue/venue.state';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-create-event',
  template: `
    <div class="container">
      <app-page-header [title]="title" [addButton]="false"></app-page-header>
      <app-event-form
        [event]="defaultEvent"
        [venues]="venues$ | async"
        [teachers]="teachers$ | async"
        [submitFormBtnText]="submitFormBtnText"
        (submitForm)="createEvent($event)">
      </app-event-form>
    </div>
  `,
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  public title = 'Add Event';
  public submitFormBtnText = 'Create Event';

  public date = new Date();
  public defaultEvent = {
    title: 'title 1',
    description: '',
    courseDate: this.date,
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

  public createEvent(event: IEvent): void {
    console.log('create event', event);
  }
}
