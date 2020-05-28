import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  public events = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  constructor() { }

  ngOnInit() {
  }

}
