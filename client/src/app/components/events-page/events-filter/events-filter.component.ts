import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsFilterComponent {

  public query: string;

  @Output() searchQuery = new EventEmitter();

  changeSearchQuery(query: string): void {
    this.searchQuery.emit(query);
  }

}
