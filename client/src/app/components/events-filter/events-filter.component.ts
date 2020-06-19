import { Component, ViewEncapsulation } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsFilterComponent {

  public myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };

  public dateModel: IMyDateModel = {
    isRange: false
  };

  constructor() { }

  onDateChanged(event: IMyDateModel): void {
    // date selected
  }

}
