import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-filter',
  template: `
    <p>
      <mat-form-field appearance="fill">
        <mat-label>Search</mat-label>
        <input
          matInput
          placeholder="Search for an event by name or topic..."
          [(ngModel)]="query"
          (ngModelChange)="changeSearchQuery($event)">
      </mat-form-field>
    </p>
  `,
  styleUrls: ['./events-filter.component.scss']
})
export class EventsFilterComponent {

  public query: string;

  @Output() searchQuery = new EventEmitter();

  changeSearchQuery(query: string): void {
    this.searchQuery.emit(query);
  }

}
