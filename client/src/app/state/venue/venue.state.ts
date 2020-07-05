import { VenueService } from './../../venue.service';
import { InitVenueState } from './venue.actions';
import { IVenue } from './venue.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class VenueStateModel {
  venues: IVenue[];
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

  @Action(InitVenueState)
  initState({ patchState }: StateContext<VenueStateModel>, { }: InitVenueState) {
    const venues = this.venueService.getVenues();

    patchState({
      venues: venues
    })
  }
}
