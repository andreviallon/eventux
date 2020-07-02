import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

}
