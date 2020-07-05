import { VenueService } from './../../venue.service';
import { InitVenueState, SelectVenue } from './venue.actions';
import { IVenue } from './venue.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class VenueStateModel {
  venues: IVenue[];
  venue: IVenue;
}

@State<VenueStateModel>({
  name: 'venues'
})

@Injectable()
export class VenueState {

  constructor(private venueService: VenueService) { }

  @Selector()
  static getVenues(state: VenueStateModel) {
    return state.venues;
  }

  @Selector()
  static getVenue(state: VenueStateModel) {
    return state.venue;
  }

  @Action(InitVenueState)
  initState({ patchState }: StateContext<VenueStateModel>, { }: InitVenueState) {
    const venues = this.venueService.getVenues();

    patchState({
      venues: venues,
      venue: undefined
    })
  }

  @Action(SelectVenue)
  selectVenue({ patchState }: StateContext<VenueStateModel>, { venueId }: SelectVenue) {
    const venue = this.venueService.getVenue(venueId);

    patchState({
      venue: venue
    })
  }
}
