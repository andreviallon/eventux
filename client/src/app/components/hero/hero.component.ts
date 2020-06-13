import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private iconReg: SvgIconRegistryService) { }

  ngOnInit() {
  }

}
