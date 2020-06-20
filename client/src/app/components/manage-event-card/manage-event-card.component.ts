import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-manage-event-card',
  templateUrl: './manage-event-card.component.html',
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent implements OnInit {

  @Input() eventOverview;

  public faEllipsisV = faEllipsisV;

  constructor() { }

  ngOnInit(): void {

    console.log('eventOverview', this.eventOverview);
  }

}
