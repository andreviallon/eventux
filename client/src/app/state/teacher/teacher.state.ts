import { TeacherService } from './../../teacher.service';
import { InitTeacherState, SelectTeacher } from './teacher.actions';
import { ITeacher } from './teacher.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class TeacherStateModel {
  teachers: ITeacher[];
  teacher: ITeacher;
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

  @Selector()
  static getTeacher(state: TeacherStateModel) {
    return state.teacher;
  }


  @Action(InitTeacherState)
  initState({ patchState }: StateContext<TeacherStateModel>, { }: InitTeacherState) {
    const teachers = this.teacherService.getTeachers();

    patchState({
      teachers: teachers,
      teacher: undefined
    })
  }

  @Action(SelectTeacher)
  selectTeacher({ patchState }: StateContext<TeacherStateModel>, { teacherId }: SelectTeacher) {
    const teacher = this.teacherService.getTeacher(teacherId);

    patchState({
      teacher: teacher
    })
  }
}
