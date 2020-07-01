import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/state/event/event.model';
import { InitEventState } from 'src/app/state/event/event.actions';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  @Select(EventState.getEvents) events$: Observable<IEvent[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new InitEventState());
  }

}
