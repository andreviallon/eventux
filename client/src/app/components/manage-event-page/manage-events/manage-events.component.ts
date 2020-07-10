import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IEventOverview } from 'src/app/state/event/event.model';
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
  public eventsOverview: IEventOverview[];

  @Select(EventState.getEventsOverview) eventsOverview$: Observable<IEventOverview[]>;

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
