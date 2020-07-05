import { SelectVenue } from './../../../state/venue/venue.actions';
import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/state/event/event.model';
import { Select, Store } from '@ngxs/store';
import { VenueState } from 'src/app/state/venue/venue.state';
import { Observable } from 'rxjs';
import { IVenue } from 'src/app/state/venue/venue.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: IEvent;

  @Select(VenueState.getVenue) venue$: Observable<IVenue>;

  public venue: IVenue;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new SelectVenue(this.event.venueId));

    this.venue$.subscribe(venue => {
      this.venue = venue;
    })
  }

}
