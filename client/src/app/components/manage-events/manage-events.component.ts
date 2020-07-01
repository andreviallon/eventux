import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IEventOverview } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {

  @Input() events: IEventOverview[];
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter;

  public title: string = 'Manage Events';
  public buttonName: string = 'Add Event';

  public delete(id) {
    this.deleteEvent.emit(id);
  }
}
