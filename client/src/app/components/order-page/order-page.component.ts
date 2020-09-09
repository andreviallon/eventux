import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { EventState } from '../../state/event/event.state';
import { IEventIncTeacherAndVenue } from '../../state/event/event.model';

@Component({
  selector: 'app-order-page',
  template: `
    <div class="order-page-container">
      <div class="thank-you-message-container">
        <h1>Thank you for your order!</h1>
        <p>You’ll receive an invoice in your email very soon.</p>
      </div>
      <app-order-summary [event]="event"></app-order-summary>
    </div>
  `,
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, OnDestroy {

  public eventId: string;
  public event: IEventIncTeacherAndVenue;

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

}
