import { IEventOverview } from './../../../state/event/event.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { DeleteEvent } from 'src/app/state/event/event.actions';

@Component({
  selector: 'app-manage-events',
  template: `
    <div class="container">
      <app-page-header
        [title]="title"
        [buttonName]="buttonName"
        [addButton]="true"
        (create)="navigateToCreateEventPage()">
      </app-page-header>
      <div class="columns">
        <div class="column is-full" *ngFor="let event of events$ | async">
          <div class="event-card-container">
            <app-manage-event-card
              [event]="event"
              (deleteEvent)="deleteEvent($event)"
              (editEvent)="editEvent($event)">
            </app-manage-event-card>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {
  public title = 'Manage Events';
  public buttonName = 'Add Event';

  @Select(EventState.getEventsOverview()) events$: Observable<IEventOverview[]>;

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
