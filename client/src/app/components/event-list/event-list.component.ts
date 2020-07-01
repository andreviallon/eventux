import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../../state/event/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() events: IEvent[];

  constructor() { }

  ngOnInit(): void {
  }

}
