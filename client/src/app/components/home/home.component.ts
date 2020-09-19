import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { IEventIncTeacherAndVenue } from './../../state/event/event.model';
import { EventState } from 'src/app/state/event/event.state';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <section class="hero is-medium">
        <div class="img-container">
          <div class="svg-top">
            <svg-icon src="../../../../assets/dot-pattern.svg"></svg-icon>
          </div>
          <div class="svg-bottom">
            <svg-icon src="../../../../assets/dot-pattern.svg"></svg-icon>
          </div>
          <div class="hero-body">
            <div class="container">
              <h1 class="title">EVENTUX</h1>
              <h2>For the developers of tomorrow</h2>
            </div>
          </div>
        </div>
      </section>
      <div class="upcoming-events-container">
        <h3>Upcoming Events</h3>
        <app-event-list [events]="upcomingEvents"></app-event-list>
        <div class="flex-container">
          <button mat-flat-button color="primary" routerLink="/events">See All Events</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subscription = new Subscription();

  public upcomingEvents: IEventIncTeacherAndVenue[] = [];

  constructor(private iconReg: SvgIconRegistryService, private store: Store) { }

  public ngOnInit() {
    this.subscription.add(
      this.store.select(EventState.getEventsIncTeacherAndVenue()).subscribe(events => {
        if (events) {
          const sortedEvents = events.sort((a, b) => {
            const dateA = new Date(a.date).valueOf();
            const dateB = new Date(b.date).valueOf();
            return dateA - dateB;
          });

          this.upcomingEvents = sortedEvents.slice(0, 6);
        }
      })
    );
  }

}
