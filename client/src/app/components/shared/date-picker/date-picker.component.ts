import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent {

  @Input() placeholder: string;
  @Input() date: string;

  public myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
  };

  public dateModel: IMyDateModel = {
    isRange: false
  };

  public onDateChanged(event: IMyDateModel): void {
    // date selected
  }
}
