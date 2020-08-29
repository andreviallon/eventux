import { ICourseDate, IEvent } from './../../state/event/event.model';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { VenueState } from 'src/app/state/venue/venue.state';
import { Observable, Subscription } from 'rxjs';
import { IVenue } from 'src/app/state/venue/venue.model';
import { TeacherState } from 'src/app/state/teacher/teacher.state';
import { ITeacher } from 'src/app/state/teacher/teacher.model';
import { EventState } from 'src/app/state/event/event.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  public title = 'Edit Event';
  public submitFormBtnText = 'Edit Event';
  public eventId: string;
  public event: IEvent;

  private subscription = new Subscription();

  @Select(VenueState.getVenues) venues$: Observable<IVenue[]>;
  @Select(TeacherState.getTeachers) teachers$: Observable<ITeacher[]>;

  constructor(private store: Store, private route: ActivatedRoute) {

  }

  public ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe(params => this.eventId = params[`id`])
    );

    this.subscription.add(
      this.store.select(EventState.getEvent(this.eventId)).subscribe(event => {
        const eventForm: IEvent = {
          ...event,
          courseDate: { day: 3, month: 4, year: 2020 } as ICourseDate
        };
        this.event = eventForm;
      })
    );
  }

  public editEvent(event: IEvent): void {
    console.log(event);
  }

}
