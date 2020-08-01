export interface ITeacher {
  _id: string;
  firstName: string;
  lastName: string;
  description: string;
  img: string;
  email: string;
  phoneNumber: number;
}

export interface ITeacherOverview {
  _id: string;
  properties: ITeacherProperty[];
}

export interface ITeacherProperty {
  title: string;
  content: string;
}
