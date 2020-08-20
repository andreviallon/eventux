import { TeacherService } from './../../teacher.service';
import { InitTeacherState } from './teacher.actions';
import { ITeacher, ITeacherOverview } from './teacher.model';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';

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
  @ImmutableContext()
  async initState({ setState }: StateContext<TeacherStateModel>, { }: InitTeacherState) {
    try {
      const teachers = await axios.get('api/v1/teachers');
      console.log('teachers', teachers);
      const teachersOverview = this.teacherService.getTeachersOverview();

      setState((state: TeacherStateModel) => {
        state.teachers = teachers.data.data;
        state.teachersOverview = teachersOverview;
        return state;
      });
    } catch (err) {
      console.log('err', err);
    }
  }
}
