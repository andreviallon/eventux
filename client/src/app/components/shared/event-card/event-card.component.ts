import { Component, Input } from '@angular/core';
import { IEventIncTeacherAndVenue } from './../../../state/event/event.model';
import { convertDate } from 'src/app/utils/convert-date';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

  @Input() event: IEventIncTeacherAndVenue;

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }

}
