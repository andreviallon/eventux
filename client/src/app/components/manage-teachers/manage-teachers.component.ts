import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.scss']
})
export class ManageTeachersComponent {

  public title: string = 'Manage teachers';

  public buttonName: string = 'Add Teacher';

  public teachersOverview = [
    {
      _id: '1',
      overview: [
        {
          title: 'name',
          content: 'John Doe'
        },
        {
          title: 'email',
          content: 'johndoe@gmail.com'
        },
        {
          title: 'phone number',
          content: '30303030'
        }
      ]
    },
    {
      _id: '2',
      overview: [
        {
          title: 'name',
          content: 'John Doe'
        },
        {
          title: 'email',
          content: 'johndoe@gmail.com'
        },
        {
          title: 'phone number',
          content: '30303030'
        }
      ]
    },
    {
      _id: '3',
      overview: [
        {
          title: 'name',
          content: 'John Doe'
        },
        {
          title: 'email',
          content: 'johndoe@gmail.com'
        },
        {
          title: 'phone number',
          content: '30303030'
        }
      ]
    }

  ];
}
