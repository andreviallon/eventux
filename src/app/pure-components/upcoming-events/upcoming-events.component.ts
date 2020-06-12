import { IEvent } from './../../event.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent {

  @Input() events: IEvent[];
}
