export class InitEventState {
  static readonly type = '[Event] Init Event State'

  constructor() { }
}

export class SelectEvent {
  static readonly type = '[Event] Select Event'

  constructor(public eventId: string) { }
}

export class EditEvent {
  static readonly type = '[Event] Edit Event'

  constructor(public id: string) { }
}


export class DeleteEvent {
  static readonly type = '[Event] Delete Event'

  constructor(public id: string) { }
}
