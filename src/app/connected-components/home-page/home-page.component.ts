import { Component, OnInit } from '@angular/core';
import { EventState } from './../../state/event.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/state/event.model';
import { InitEventState } from 'src/app/state/event.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Select(EventState.getEvents) events$: Observable<IEvent[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new InitEventState());
  }
}
