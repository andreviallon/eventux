export class InitEventState {
  static readonly type = '[Event API] Init Event State';

  constructor() { }
}

export class SelectEvent {
  static readonly type = '[Event Detail] Select Event';

  constructor(public id: string) { }
}

export class EditEvent {
  static readonly type = '[Event] Edit Event';

  constructor(public id: string) { }
}

export class DeleteEvent {
  static readonly type = '[Event] Delete Event';

  constructor(public id: string) { }
}
