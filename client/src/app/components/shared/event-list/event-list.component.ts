import { Component, Input } from '@angular/core';
import { IEventIncTeacherAndVenue } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-event-list',
  template: `
    <mat-grid-list cols="3" rowHeight="450px">
      <mat-grid-tile
          *ngFor="let event of events">
        <app-event-card [event]="event"></app-event-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  @Input() events: IEventIncTeacherAndVenue[];

}
