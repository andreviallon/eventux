import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEvent } from 'src/app/state/event/event.model';
import { Subscription, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { InitEventState } from 'src/app/state/event/event.actions';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  public events: IEvent[];

  private subscription = new Subscription();

  @Select(EventState.getEvents) events$: Observable<IEvent[]>;

  constructor(private store: Store, private iconReg: SvgIconRegistryService) { }

  ngOnInit(): void {
    this.store.dispatch(new InitEventState());

    this.subscription.add(
      this.events$.subscribe(events => this.events = events)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
