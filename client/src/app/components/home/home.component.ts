import { Component } from '@angular/core';
import { EventState } from '../../state/event/event.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { IEventIncTeacherAndVenue } from './../../state/event/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Select(EventState.getEventsIncTeacherAndVenue()) events$: Observable<IEventIncTeacherAndVenue[]>;

  constructor(private iconReg: SvgIconRegistryService) { }

}
