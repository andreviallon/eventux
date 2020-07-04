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
    console.log('get venues state', state.venues);
    return state.venues;
  }


  @Action(InitVenueState)
  initState({ patchState }: StateContext<VenueStateModel>, { }: InitVenueState) {
    console.log('patchState');
    const venues = this.venueService.getVenues();
    console.log('venues init', venues);

    patchState({
      venues: venues
    })
  }
}
