export class InitTeacherState {
  static readonly type = '[Teacher] Init Teacher State'

  constructor() { }
}

export class SelectTeacher {
  static readonly type = '[Teacher] Select Teacher'

  constructor(public teacherId: string) { }
}
