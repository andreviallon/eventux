import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/state/event/event.model';
import { InitEventState } from 'src/app/state/event/event.actions';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsFilterComponent implements OnInit{

  @Select(EventState.getEvents) events$: Observable<IEvent[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new InitEventState());
  }


}
