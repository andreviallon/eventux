import { VenueService } from './../../venue.service';
import { InitVenueState } from './venue.actions';
import { IVenue } from './venue.model';
import { State, Selector, Action, StateContext, createSelector, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class VenueStateModel {
  venues: IVenue[];
}

export const VENUE_STATE = new StateToken<VenueStateModel>('venueState');

@State<VenueStateModel>({
  name: VENUE_STATE
})

@Injectable()
export class VenueState {

  constructor(private venueService: VenueService) { }

  @Selector()
  static getVenues(state: VenueStateModel) {
    return state.venues;
  }

  static getVenue(id: string) {
    return createSelector(
      ['venue'],
      (state: VenueStateModel): IVenue => {
        return state.venues.find(venue => venue._id === id);
      }
    );
  }


  @Action(InitVenueState)
  initState({ patchState }: StateContext<VenueStateModel>, { }: InitVenueState) {
    const venues = this.venueService.getVenues();

    patchState({
      venues
    });
  }
}
