import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent implements OnInit {

  public title: string = 'Manage events';

  public buttonName: string = 'Add Event';

  constructor() { }

  ngOnInit(): void {
  }

}
