import { EventService } from './../../event.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { faLongArrowAltRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { IEvent } from '../../state/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  public event: IEvent;
  public faLongArrowAltRight = faLongArrowAltRight;
  public faShare = faShare;
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;
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
