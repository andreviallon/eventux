import { Component, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent {

  @Input() eventOverview;

  public faEllipsisV = faEllipsisV;

}
