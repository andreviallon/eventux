import { IEvent } from './../event.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit, OnDestroy {

  private event: IEvent;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => this.event = this.eventService.getEvent(params['id']))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
