import { Component, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-teacher-card',
  templateUrl: './manage-teacher-card.component.html',
  styleUrls: ['./manage-teacher-card.component.scss']
})
export class ManageTeacherCardComponent {

  @Input() teacherOverview;

  public faEllipsisV = faEllipsisV;

}
