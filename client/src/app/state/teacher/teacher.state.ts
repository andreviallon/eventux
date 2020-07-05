import { TeacherService } from './../../teacher.service';
import { InitTeacherState } from './teacher.actions';
import { ITeacher } from './teacher.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class TeacherStateModel {
  teachers: ITeacher[];
}

@State<TeacherStateModel>({
  name: 'teachers'
})

@Injectable()
export class TeacherState {

  constructor(private teacherService: TeacherService) { }

  @Selector()
  static getTeachers(state: TeacherStateModel) {
    return state.teachers;
  }

  @Action(InitTeacherState)
  initState({ patchState }: StateContext<TeacherStateModel>, { }: InitTeacherState) {
    const teachers = this.teacherService.getTeachers();

    patchState({
      teachers: teachers
    })
  }
}
