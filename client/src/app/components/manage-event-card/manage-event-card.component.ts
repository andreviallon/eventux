import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { IEventOverview } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent {

  @Input() event: IEventOverview;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  public faEllipsisV = faEllipsisV;
  public showDropdown = false;

  public toogleDropdown () {
    this.showDropdown = !this.showDropdown;
  }

  public delete() {
    this.deleteEvent.emit(this.event._id);
  }
}
