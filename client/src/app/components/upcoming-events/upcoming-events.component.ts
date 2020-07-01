import { Component, Input } from '@angular/core';
import { IEvent } from '../../state/event/event.model';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent {

  @Input() events: IEvent[];

}
