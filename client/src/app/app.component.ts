import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { InitEventState } from './state/event/event.actions';
import { InitVenueState } from './state/venue/venue.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {

  }

  public ngOnInit(): void {
    this.store.dispatch(new InitEventState());
    this.store.dispatch(new InitVenueState());
    this.store.dispatch(new InitVenueState());
  }
}
