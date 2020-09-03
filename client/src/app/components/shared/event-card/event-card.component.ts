import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IEventIncTeacherAndVenue } from './../../../state/event/event.model';
import { convertDate } from 'src/app/utils/convert-date';

@Component({
  selector: 'app-event-card',
  template: `
    <div id="event-card">
      <a [routerLink]="['/event', event._id]">
        <mat-card>
          <div class="card-image">
            <img mat-card-image src="{{event.img}}">
          </div>
          <div class="price">{{ event.price | eventPrice }}</div>
          <div class="card-content">
            <mat-card-header>
              <mat-card-title>{{ event.title }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>{{ event.venue.city }}, {{ event.venue.country }}</p>
              <p>{{ getCourseDate() }}</p>
              <mat-chip-list >
                <mat-chip *ngFor="let tag of event.tags">{{ tag }}</mat-chip>
              </mat-chip-list>

            </mat-card-content>
          </div>
        </mat-card>
      </a>
    </div>
  `,
  styleUrls: ['./event-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventCardComponent {

  @Input() event: IEventIncTeacherAndVenue;

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }
}
