import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-front-page-search',
  templateUrl: './front-page-search.component.html',
  styleUrls: ['./front-page-search.component.scss']
})
export class FrontPageSearchComponent implements OnInit {

  public faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
