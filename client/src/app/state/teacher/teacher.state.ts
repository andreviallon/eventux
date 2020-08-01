import { TeacherService } from './../../teacher.service';
import { InitTeacherState } from './teacher.actions';
import { ITeacher, ITeacherOverview } from './teacher.model';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class TeacherStateModel {
  teachers: ITeacher[];
  teachersOverview: ITeacherOverview[];
}

export const TEACHER_STATE = new StateToken<TeacherStateModel>('teacherState');

@State<TeacherStateModel>({
  name: TEACHER_STATE
})

@Injectable()
export class TeacherState {

  constructor(private teacherService: TeacherService) { }

  @Selector()
  static getTeachers(state: TeacherStateModel): ITeacher[] {
    return state.teachers;
  }

  @Selector()
  static getTeacherOverview(state: TeacherStateModel): ITeacherOverview[] {
    return state.teachersOverview;
  }

  static getTeacher(id: string) {
    return createSelector(
      ['teacher'],
      (state: TeacherStateModel): ITeacher => {
        return state.teachers.find(teacher => teacher._id === id);
      }
    );
  }


  @Action(InitTeacherState)
  initState({ patchState }: StateContext<TeacherStateModel>, { }: InitTeacherState) {
    const teachers = this.teacherService.getTeachers();
    const teachersOverview = this.teacherService.getTeachersOverview();

    patchState({
      teachers,
      teachersOverview
    });
  }
}
