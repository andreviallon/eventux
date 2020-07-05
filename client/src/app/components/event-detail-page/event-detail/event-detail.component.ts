import { IVenue } from './../../../state/venue/venue.model';
import { Component } from '@angular/core';
import { faLongArrowAltRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/state/event/event.model';
import { Store, Select } from '@ngxs/store';
import { SelectEvent } from 'src/app/state/event/event.actions';
import { EventState } from 'src/app/state/event/event.state';
import { VenueState } from 'src/app/state/venue/venue.state';
import { SelectVenue } from 'src/app/state/venue/venue.actions';
import { TeacherState } from 'src/app/state/teacher/teacher.state';
import { ITeacher } from 'src/app/state/teacher/teacher.model';
import { SelectTeacher } from 'src/app/state/teacher/teacher.actions';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  @Select(EventState.getEvent) event$: Observable<IEvent>;
  @Select(EventState.getRelatedEvent) relatedEvents$: Observable<IEvent[]>;
  @Select(VenueState.getVenue) venue$: Observable<IVenue>;
  @Select(TeacherState.getTeacher) teacher$: Observable<ITeacher>;


  public faLongArrowAltRight = faLongArrowAltRight;
  public faShare = faShare;
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;

  public event: IEvent;
  public venue: IVenue;
  public teacher: ITeacher;
  public relatedEvents: IEvent[];

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(params => {
        this.store.dispatch(new SelectEvent(params['id']));
      })
    );

    this.subscription.add(
      this.event$.subscribe(event => {
        this.event = event;
        this.store.dispatch(new SelectVenue(event.venueId));
        this.store.dispatch(new SelectTeacher(event.teacherId));
      })
    )

    this.subscription.add(
      this.relatedEvents$.subscribe(relatedEvents => this.relatedEvents = relatedEvents)
    )

    this.subscription.add(
      this.venue$.subscribe(venue => this.venue = venue)
    )

    this.subscription.add(
      this.teacher$.subscribe(teacher => this.teacher = teacher)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
