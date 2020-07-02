import { Component } from '@angular/core';
import { faLongArrowAltRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { IEvent } from 'src/app/state/event/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  public faLongArrowAltRight = faLongArrowAltRight;
  public faShare = faShare;
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;

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
