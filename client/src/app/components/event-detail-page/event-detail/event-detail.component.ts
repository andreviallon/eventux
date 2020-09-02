import { IEventIncTeacherAndVenue } from './../../../state/event/event.model';
import { Component, Input } from '@angular/core';
import { faLongArrowAltRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { convertDate } from 'src/app/utils/convert-date';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {
  @Input() event: IEventIncTeacherAndVenue;
  @Input() relatedEvents: IEventIncTeacherAndVenue[];

  public faLongArrowAltRight = faLongArrowAltRight;
  public faShare = faShare;
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }
}
