import { Component, Input } from '@angular/core';
import { IEvent } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  @Input() events: IEvent[];

}
