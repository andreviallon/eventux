import { IEvent, IEventIncTeacherAndVenue } from './../../../state/event/event.model';
import { Observable, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { EditEvent, DeleteEvent } from 'src/app/state/event/event.actions';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {

  public title = 'Manage Events';
  public buttonName = 'Add Event';

  private subscription = new Subscription();

  @Select(EventState.getEventsIncTeacherAndVenue()) events$: Observable<IEventIncTeacherAndVenue[]>;

  constructor(private store: Store, private router: Router) { }

  public navigateToCreateEventPage() {
    this.router.navigate(['create-event']);
  }

  editEvent($event: string): void {
    this.router.navigate(['edit-event', $event]);
  }

  deleteEvent($event: string): void {
    this.store.dispatch(new DeleteEvent($event));
  }

}
