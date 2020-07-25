import { Component } from '@angular/core';
import { IEventIncTeacherAndVenue } from 'src/app/state/event/event.model';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { EventState } from 'src/app/state/event/event.state';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  public title = 'Events';

  @Select(EventState.getEventsIncTeacherAndVenue()) events$: Observable<IEventIncTeacherAndVenue[]>;

  constructor(private iconReg: SvgIconRegistryService) { }

}
