import { Component, Input } from '@angular/core';
import { IEventIncTeacherAndVenue } from '../../state/event/event.model';
import { convertDate } from '../../utils/convert-date';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {

  @Input() event: IEventIncTeacherAndVenue;

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }

}
