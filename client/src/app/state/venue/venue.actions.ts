export class InitVenueState {
  static readonly type = '[Venue] Init Venue State'

  constructor() { }
}

export class SelectVenue {
  static readonly type = '[Venue] Select Venue'

  constructor(public venueId: string) { }
}
