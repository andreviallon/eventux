import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventsPageComponent } from './manage-events-page.component';

describe('ManageEventsPageComponent', () => {
  let component: ManageEventsPageComponent;
  let fixture: ComponentFixture<ManageEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
