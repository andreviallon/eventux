import { Component, Input } from '@angular/core';
import { IEventIncTeacherAndVenue } from '../../state/event/event.model';
import { convertDate } from '../../utils/convert-date';

@Component({
  selector: 'app-order-summary',
  template: `
    <div class="order-summary-container">
      <img src={{event.img}} alt="Event image">
      <div class="summary-container">
        <h3>Summary</h3>
        <h4>Event</h4>
        <p>{{ event.title }}</p>
        <h4>Price</h4>
        <p>{{ event.price | eventPrice }}</p>
        <h4>Location</h4>
        <p>{{ event.venue.name }}</p>
        <p>{{ event.venue.address }}</p>
        <p>{{ event.venue.zipcode }} {{ event.venue.city }}</p>
        <p>{{ event.venue.phoneNumber }}</p>
        <h4>Schedule</h4>
        <p>From {{ event.startTime }} to {{ event.endTime }}</p>
        <p>{{ getCourseDate() }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {

  @Input() event: IEventIncTeacherAndVenue;

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }

}
