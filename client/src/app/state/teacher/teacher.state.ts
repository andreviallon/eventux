import { InitTeacherState } from './teacher.actions';
import { ITeacher } from './teacher.model';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';

export class TeacherStateModel {
  teachers: ITeacher[];
}

export const TEACHER_STATE = new StateToken<TeacherStateModel>('teacherState');

@State<TeacherStateModel>({
  name: TEACHER_STATE
})

@Injectable()
export class TeacherState {

  @Selector()
  static getTeachers(state: TeacherStateModel): ITeacher[] {
    return state.teachers;
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

      setState((state: TeacherStateModel) => {
        state.teachers = teachers.data.data;
        return state;
      });
    } catch (err) {
      throw err;
    }
  }
}
