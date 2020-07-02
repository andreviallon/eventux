import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventState } from '../../../state/event/event.state';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { IEvent } from 'src/app/state/event/event.model';
import { InitEventState } from 'src/app/state/event/event.actions';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public events: IEvent[] = [];

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
