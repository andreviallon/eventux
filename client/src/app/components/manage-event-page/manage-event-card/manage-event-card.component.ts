import { IEvent } from './../../../state/event/event.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent {

  @Input() event: IEvent;
  @Output() editEvent: EventEmitter<string> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  public faEllipsisV: IconDefinition = faEllipsisV;
  public showDropdown: boolean = false;

  public toogleDropdown(event): void {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  public edit(): void {
    event.stopPropagation();
    this.editEvent.emit(this.event._id);
  }

  public delete(): void {
    event.stopPropagation();
    this.deleteEvent.emit(this.event._id);
  }

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
