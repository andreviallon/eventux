import { IEventIncTeacherAndVenue } from './../../../state/event/event.model';
import { Component, Input } from '@angular/core';
import { faLongArrowAltRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { convertDate } from 'src/app/utils/convert-date';
import axios from 'axios';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  @Input() event: IEventIncTeacherAndVenue;
  @Input() relatedEvents: IEventIncTeacherAndVenue[];

  public eventImg;
  public faLongArrowAltRight = faLongArrowAltRight;
  public faShare = faShare;
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;

  ngOnInit() {
    // this.eventImg = this.getImage();
  }

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }

  public async getImage() {
    console.log('get img');
    try {
      // const eventResponse = await axios.get('api/v1/event/5f3e996daa08f015a19a562f');
      // console.log('res', eventResponse);
      // const event = eventResponse.data.data;
      // console.log('event data =>', event);
    } catch (err) {
      throw err;
    }
  }
}
