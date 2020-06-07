import { IEvent, EventService } from './../event.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  public event: IEvent;
  public faLongArrowAltRight = faLongArrowAltRight;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => this.event = this.eventService.getEvent(params['id']))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
