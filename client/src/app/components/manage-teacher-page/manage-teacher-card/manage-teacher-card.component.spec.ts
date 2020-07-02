import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeacherCardComponent } from './manage-teacher-card.component';

describe('ManageTeacherCardComponent', () => {
  let component: ManageTeacherCardComponent;
  let fixture: ComponentFixture<ManageTeacherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeacherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeacherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
