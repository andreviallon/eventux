import { Pipe, PipeTransform } from '@angular/core';
import { ICourseDate } from '../state/event/event.model';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(value: ICourseDate): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[value.month - 1];

    return `${value.day} ${month} ${value.year}`;

  }

}
