import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-header',
  templateUrl: './manage-header.component.html',
  styleUrls: ['./manage-header.component.scss']
})
export class ManageHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() buttonName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
