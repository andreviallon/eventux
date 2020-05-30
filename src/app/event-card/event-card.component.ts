import { IEvent } from './../event.service';
import { Component, OnInit, Input } from '@angular/core';
import { faClock, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: IEvent;

  public faClock = faClock;
  public faCalendar = faCalendar;
  public faMapMarkerAlt = faMapMarkerAlt;


  constructor() { }

  ngOnInit() {
  }

}
