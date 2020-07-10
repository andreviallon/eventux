import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input() title: string;
  @Input() buttonName: string;
  @Input() addButton: boolean;

  @Output() create: EventEmitter<void> = new EventEmitter();

}
