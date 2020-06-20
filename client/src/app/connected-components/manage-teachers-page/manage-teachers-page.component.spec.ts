import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeachersPageComponent } from './manage-teachers-page.component';

describe('ManageTeachersPageComponent', () => {
  let component: ManageTeachersPageComponent;
  let fixture: ComponentFixture<ManageTeachersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeachersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeachersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
