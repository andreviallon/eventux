import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IEvent } from 'src/app/state/event/event.model';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { InitEventState, EditEvent, DeleteEvent } from 'src/app/state/event/event.actions';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {

  public title: string = 'Manage events';
  public buttonName: string = 'Add Event';

  @Select(EventState.getEvents) events$: Observable<IEvent[]>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new InitEventState);
  }

  public navigateToCreateEventPage() {
    this.router.navigate(['create-event']);
  }

  editEvent($event: string): void {
    this.store.dispatch(new EditEvent($event));
  }

  deleteEvent($event: string): void {
    this.store.dispatch(new DeleteEvent($event));
  }

}
