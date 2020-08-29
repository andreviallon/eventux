import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'eventPrice'
})
export class EventPricePipe implements PipeTransform {
  private currencyCode = 'USD';
  private display = 'symbol';
  private digitInfo = '1.0-0';

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value): string {
    return value > 0 ? this.currencyPipe.transform(value, this.currencyCode, this.display, this.digitInfo) : 'Free';
  }

}
