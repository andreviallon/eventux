import { Component, Input } from '@angular/core';
import { IEventIncTeacherAndVenue } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-event-list',
  template: `
    <div class="flex-container">
      <div *ngFor="let event of events" class="event">
        <app-event-card [event]="event"></app-event-card>
      </div>
    </div>
  `,
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  public columns: number;

  @Input() events: IEventIncTeacherAndVenue[];

}
