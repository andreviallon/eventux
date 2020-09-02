import { Component } from '@angular/core';
import { EventState } from '../../state/event/event.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { IEventIncTeacherAndVenue } from './../../state/event/event.model';

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
        <app-event-list [events]="events$ | async"></app-event-list>
        <div class="flex-container">
          <button mat-flat-button color="primary" routerLink="/events">See All Events</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Select(EventState.getEventsIncTeacherAndVenue()) events$: Observable<IEventIncTeacherAndVenue[]>;

  constructor(private iconReg: SvgIconRegistryService) { }

}
