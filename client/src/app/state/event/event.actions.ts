import { IEvent } from './event.model';
export class InitEventState {
  static readonly type = '[Event API] Init Event State';

  constructor() { }
}

export class SelectEvent {
  static readonly type = '[Event Detail] Select Event';

  constructor(public id: string) { }
}

export class CreateEvent {
  static readonly type = '[Event] Create Event';

  constructor(public event: IEvent) { }
}

export class EditEvent {
  static readonly type = '[Event] Edit Event';

  constructor(public event: IEvent) { }
}

export class DeleteEvent {
  static readonly type = '[Event] Delete Event';

  constructor(public id: string) { }
}
