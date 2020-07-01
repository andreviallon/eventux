export class InitEventState {
  static readonly type = '[Event] Init Event State'

  constructor() { }
}

export class DeleteEvent {
  static readonly type = '[Event] Delete Event'

  constructor(public id: string) { }
}
