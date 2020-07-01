import { IEvent } from '../../state/event/event.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit, OnDestroy {

  public event: IEvent;
  public relatedEvents: IEvent[];

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(params => this.event = this.eventService.getEvent(params['id']))
    );

    this.relatedEvents = this.eventService.getRelatedEvents();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
