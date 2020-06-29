import { IEvent } from 'src/app/state/event.model';
import { Component, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent {

  @Input() eventOverview: IEvent;

  public faEllipsisV = faEllipsisV;
  public showDropdown = false;

  public toogleDropdown () {
    this.showDropdown = !this.showDropdown;
  }
}
