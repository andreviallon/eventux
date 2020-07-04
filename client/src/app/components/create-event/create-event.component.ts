import { IVenue } from './../../state/venue/venue.model';
import { VenueState } from './../../state/venue/venue.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InitVenueState } from 'src/app/state/venue/venue.actions';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public title: string = 'Add event';

  @Select(VenueState.getVenues) venues$: Observable<IVenue[]>;

  constructor(private store: Store) {

  }

  public ngOnInit(): void {
    this.store.dispatch(new InitVenueState());
  }

}
