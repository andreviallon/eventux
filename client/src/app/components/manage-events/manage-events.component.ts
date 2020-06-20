import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent implements OnInit {

  public title: string = 'Manage Events';

  public buttonName: string = 'Add Event';

  public eventsOverview = [
    {
      _id: '1',
      overview: [
        {
          title: 'name',
          content: 'React context API and Hooks 101'
        },
        {
          title: 'date',
          content: '03/04/2020'
        },
        {
          title: 'teacher',
          content: 'John Doe'
        },
        {
          title: 'venue',
          content: 'Blank Venue & Pop-up'
        },
        {
          title: 'city',
          content: 'Copenhagen'
        }
      ]
    },
    {
      _id: '1',
      overview: [
        {
          title: 'name',
          content: 'React context API and Hooks 101'
        },
        {
          title: 'date',
          content: '03/04/2020'
        },
        {
          title: 'teacher',
          content: 'John Doe'
        },
        {
          title: 'venue',
          content: 'Blank Venue & Pop-up'
        },
        {
          title: 'city',
          content: 'Copenhagen'
        }
      ]
    },
    {
      _id: '1',
      overview: [
        {
          title: 'name',
          content: 'React context API and Hooks 101'
        },
        {
          title: 'date',
          content: '03/04/2020'
        },
        {
          title: 'teacher',
          content: 'John Doe'
        },
        {
          title: 'venue',
          content: 'Blank Venue & Pop-up'
        },
        {
          title: 'city',
          content: 'Copenhagen'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
