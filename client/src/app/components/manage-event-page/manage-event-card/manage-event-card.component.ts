import { IEventOverview, IEventIncTeacherAndVenue } from 'src/app/state/event/event.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { getEventOverview } from 'src/app/utils/event-overview';

@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent implements OnInit {

  @Input() event: IEventIncTeacherAndVenue;
  @Output() editEvent: EventEmitter<string> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  public eventOverview: IEventOverview;
  public faEllipsisV: IconDefinition = faEllipsisV;
  public showDropdown = false;

  ngOnInit() {
    this.eventOverview = getEventOverview(this.event);
  }

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
