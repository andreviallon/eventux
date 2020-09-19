import { IEventOverview } from 'src/app/state/event/event.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-event-card',
  template: `
    <mat-card [routerLink]="['/event', event._id]">
      <ul class="content flex-container">
        <li *ngFor="let eventProperty of event.properties" class="list-item">
          <p class="overview-title">{{ eventProperty.title }}</p>
          <ng-container *ngIf="eventProperty.title === 'date'; then dateProperty; else otherProperty;"></ng-container>
          <ng-template #dateProperty>
            <p class="overview-content">{{ eventProperty.content | date }}</p>
          </ng-template>
          <ng-template #otherProperty>
            <p class="overview-content">{{ eventProperty.content }}</p>
          </ng-template>
        </li>
        <li>
          <button mat-icon-button [matMenuTriggerFor]="menu" (click)="stopPropagation($event)">
            <fa-icon [icon]="faEllipsisV"></fa-icon>
          </button>
          <mat-menu #menu="matMenu" xPosition="before">
            <button mat-menu-item (click)="edit()">
              <a class="dropdown-item">Edit Event</a>
            </button>
            <button mat-menu-item (click)="delete()">
              <a class="dropdown-item">Delete Event</a>
            </button>
          </mat-menu>
        </li>
      </ul>
    </mat-card>
  `,
  styleUrls: ['./manage-event-card.component.scss']
})
export class ManageEventCardComponent {

  @Input() event: IEventOverview;
  @Output() editEvent: EventEmitter<string> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  public eventOverview: IEventOverview;
  public faEllipsisV: IconDefinition = faEllipsisV;
  public showDropdown = false;

  ngOnInit() {
    console.log('event', this.event);
  }


  public toogleDropdown(event): void {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  public edit(): void {
    event.stopPropagation();
    this.editEvent.emit(this.event._id);
  }

  public delete(): void {
    event.stopPropagation();
    this.deleteEvent.emit(this.event._id);
  }

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
