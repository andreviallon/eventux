import { IEventIncTeacherAndVenue } from './../../state/event/event.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faLongArrowAltRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { convertDate } from 'src/app/utils/convert-date';
import { Select, Store } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  template: `
    <div class="container">
      <section class="hero is-medium">
        <div
          class="img-container"
          [ngStyle]="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43)), url(' + event.img + ')'}">
          <div class="svg-top">
            <svg-icon src="../../assets/dot-pattern.svg"></svg-icon>
          </div>
          <div class="svg-bottom">
            <svg-icon src="../../assets/dot-pattern.svg"></svg-icon>
          </div>
          <div class="hero-body">
            <div class="columns">
              <div class="title-container column is-half">
                <h3 class="title is-1 is-spaced">{{ event.title }}</h3>
                <div class="subtitle teacher">
                  <p>by {{ event.teacher.firstName }} {{ event.teacher.lastName }}</p>
                </div>
                <div class="subtitle location">
                  <p>{{ event.venue.name }}</p>
                  <p>{{ event.venue.address }}</p>
                  <p>{{ event.venue.zipcode }} {{ event.venue.city }}</p>
                </div>
              </div>
            </div>
            <a class="button is-link" [routerLink]="['/order', event._id]">
              Book a sit now
              <br />
              for {{ event.price | eventPrice }}
            </a>
          </div>
        </div>
      </section>

      <div class="event-content container">
        <div class="columns is-variable is-8">
          <div class="column is-7">

            <div class="description-container">
              <h3 class="title is-4">Description</h3>
              <div class="description">
                <p>{{ event.description }}</p>
              </div>
            </div>

            <div class="teacher-container">
              <h3 class="title is-4">Meet you teacher</h3>
              <article class="media">
                <div class="teacher-title">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img class="round-img teacher-avatar" src="{{event.teacher.img}}">
                    </p>
                  </figure>
                  <div class="media-content">
                    <p>{{ event.teacher.firstName }} {{ event.teacher.lastName }}</p>
                  </div>
                </div>
                <div class="description">
                  <p>{{ event.teacher.description }}</p>
                </div>
              </article>
            </div>

            <div class="topics-container">
              <p class="title is-4">Topics</p>
              <div class="description tags are-medium">
                <span class="tag" *ngFor="let tag of event.tags">#{{ tag }}</span>
              </div>
            </div>
          </div>

          <div class="column is-5">

            <div class="event-location-container">
              <h3 class="title is-4">Event Location</h3>
              <div class="venue-container">
                <div class="venue-img" [ngStyle]="{'background-image': 'url(' + event.venue.img + ')'}">
                  <div class="svg-venue">
                    <svg-icon src="../../assets/dot-pattern.svg"></svg-icon>
                  </div>
                  <img/>
                </div>
                <p class="venue-name">{{ event.venue.name }}</p>
                <p>{{ event.venue.address }}</p>
                <p>{{ event.venue.zipcode }} {{ event.venue.city }}</p>
                <p>{{ event.venue.phoneNumber }}</p>
                <a [href]="event.venue.website" target="_blank" class="venue-website">Go to venue's website <fa-icon [icon]="faLongArrowAltRight"></fa-icon></a>
              </div>
            </div>

            <div class="schedule-container">
              <h3 class="title is-4">Schedule</h3>
              <p>From {{ event.startTime }} to {{ event.endTime }}</p>
              <p>{{ getCourseDate() }}</p>
            </div>

            <div class="share-container">
              <h3 class="title is-4">Share this course</h3>
              <div class="social-container">
                <div class="social-circle">
                  <fa-icon [icon]="faTwitter"></fa-icon>
                </div>
                <div class="social-circle">
                  <fa-icon [icon]="faFacebook"></fa-icon>
                </div>
                <div class="social-circle">
                  <fa-icon [icon]="faShare"></fa-icon>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="related-events-container">
        <h3 class="title is-4">Related Events</h3>
        <app-event-list [events]="relatedEvents$ | async"></app-event-list>
      </div>
    </div>
  `,
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  @Select(EventState.getEventsIncTeacherAndVenue()) relatedEvents$: Observable<IEventIncTeacherAndVenue[]>;

  public eventId: string;
  public event: IEventIncTeacherAndVenue;

  public faLongArrowAltRight = faLongArrowAltRight;
  public faShare = faShare;
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store) { }

  public ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(params => this.eventId = params[`id`])
    );

    this.subscription.add(
      this.store.select(EventState.getEventIncTeacherAndVenue(this.eventId)).subscribe(event => {
        this.event = event;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getCourseDate() {
    return convertDate(this.event.courseDate);
  }
}
