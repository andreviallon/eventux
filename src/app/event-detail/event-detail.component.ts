import { IEvent, EventService } from './../event.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  public event: IEvent;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => this.event = this.eventService.getEvent(params['id']))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
