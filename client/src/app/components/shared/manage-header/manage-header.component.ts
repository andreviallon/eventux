import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-header',
  templateUrl: './manage-header.component.html',
  styleUrls: ['./manage-header.component.scss']
})
export class ManageHeaderComponent {

  @Input() title: string;
  @Input() buttonName: string;
  @Input() addButton: boolean;

  @Output() create: EventEmitter<void> = new EventEmitter();

}
