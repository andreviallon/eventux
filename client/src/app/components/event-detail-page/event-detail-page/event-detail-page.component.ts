import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { IEvent } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit, OnDestroy {

  @Select(EventState.getRelatedEvent) relatedEvents$: Observable<IEvent[]>;

  public eventId: string;
  public event: IEvent;

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store) { }

  public ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(params => this.eventId = params['id'])
    );

    this.subscription.add(
      this.store.select(EventState.getEvent(this.eventId)).subscribe(event => {
        this.event = event
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
