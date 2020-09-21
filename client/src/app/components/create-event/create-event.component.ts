import { ITeacher } from './../../state/teacher/teacher.model';
import { TeacherState } from './../../state/teacher/teacher.state';
import { IVenue } from './../../state/venue/venue.model';
import { VenueState } from './../../state/venue/venue.state';
import { Component, OnInit } from '@angular/core';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { IEvent } from 'src/app/state/event/event.model';
import { Router } from '@angular/router';
import { CreateEvent } from 'src/app/state/event/event.actions';

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
export class CreateEventComponent implements OnInit {
  public title = 'Add Event';
  public submitFormBtnText = 'Create Event';

  public defaultEvent = {
    title: '',
    description: '',
    courseDate: '',
    startTime: '',
    endTime: '',
    price: 0,
    tags: [],
    img: '',
    venueId: '',
    teacherId: ''
  };

  private subscription = new Subscription();

  @Select(VenueState.getVenues) venues$: Observable<IVenue[]>;
  @Select(TeacherState.getTeachers) teachers$: Observable<ITeacher[]>;

  constructor(private store: Store, private router: Router, private actions$: Actions) { }

  public ngOnInit() {
    this.subscription.add(
      this.actions$
        .pipe(ofActionSuccessful(CreateEvent))
        .subscribe(() => this.router.navigate(['manage-events']))
    );
  }

  public createEvent(event: IEvent): void {
    this.store.dispatch(new CreateEvent(event));
    console.log('create event', event);
  }
}
