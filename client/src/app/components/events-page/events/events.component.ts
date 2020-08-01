import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEventIncTeacherAndVenue } from 'src/app/state/event/event.model';
import { Observable, Subscription } from 'rxjs';
import { Select } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  public title = 'Events';
  public events: IEventIncTeacherAndVenue[];
  public filteredEvents: IEventIncTeacherAndVenue[];

  public searchString: string;
  public topic: string;
  public location: string;
  public price: number;

  private subscription = new Subscription();


  @Select(EventState.getEventsIncTeacherAndVenue()) events$: Observable<IEventIncTeacherAndVenue[]>;

  constructor(private iconReg: SvgIconRegistryService) { }

  public ngOnInit(): void {
    this.subscription.add(
      this.events$.subscribe(e => this.events = e)
    );

    this.filterEvents('');
  }

  public filterEvents(inputQuery): void {
    const query = inputQuery.toLowerCase().trim();

    this.filteredEvents = this.events.filter(event => event.title.toLowerCase().includes(query));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
