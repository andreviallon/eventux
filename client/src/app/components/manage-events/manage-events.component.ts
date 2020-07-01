import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IEventOverview } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {

  @Input() events: IEventOverview[];
  @Output() editEvent: EventEmitter<string> = new EventEmitter;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter;

  public title: string = 'Manage Events';
  public buttonName: string = 'Add Event';

  public edit(id: string): void {
    this.editEvent.emit(id);
  }

  public delete(id: string): void {
    this.deleteEvent.emit(id);
  }
}
