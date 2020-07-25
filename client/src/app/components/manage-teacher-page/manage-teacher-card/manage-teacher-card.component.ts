import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-teacher-card',
  templateUrl: './manage-teacher-card.component.html',
  styleUrls: ['./manage-teacher-card.component.scss']
})
export class ManageTeacherCardComponent {

  @Input() teacherOverview;

  public faEllipsisV = faEllipsisV;


  // @Input() teacher: ITeacherOverview;
  // @Output() editTeacher: EventEmitter<string> = new EventEmitter();
  // @Output() deleteTeacher: EventEmitter<string> = new EventEmitter();

  // public faEllipsisV: IconDefinition = faEllipsisV;
  // public showDropdown = false;

  // public toogleDropdown(event): void {
  //   event.stopPropagation();
  //   this.showDropdown = !this.showDropdown;
  // }

  // public edit(): void {
  //   event.stopPropagation();
  //   this.editTeacher.emit(this.teacher._id);
  // }

  // public delete(): void {
  //   event.stopPropagation();
  //   this.deleteTeacher.emit(this.teacher._id);
  // }

  // public stopPropagation(event: MouseEvent): void {
  //   event.stopPropagation();
  // }

}
