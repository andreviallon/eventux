import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  AfterContentInit
} from '@angular/core';
import { IEvent } from './../../state/event/event.model';
import { ITeacher } from './../../state/teacher/teacher.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { times } from 'src/app/utils/times';
import { IVenue } from './../../state/venue/venue.model';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-form',
  template: `
    <form id="event-form" [formGroup]="eventForm">
      <section>
        <p class="section-title">Event Information</p>
          <mat-form-field>
            <mat-label>Title</mat-label>
            <input matInput type="text" formControlName="title">
            <mat-error *ngIf="eventForm.get('title').hasError('required') && eventForm.get('title').dirty">
              Title is required
            </mat-error>
          </mat-form-field>

          <div class="flex-space-evenly">
            <mat-form-field>
              <mat-label>Date</mat-label>
              <input matInput [matDatepicker]="picker" formControlName="date">
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
              <mat-error *ngIf="eventForm.get('date').hasError('required') && eventForm.get('date').dirty">
                Date is required
              </mat-error>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Price</mat-label>
              <input matInput type="number" formControlName="price">
              <span matPrefix>$ &nbsp;</span>
              <mat-error *ngIf="eventForm.get('price').hasError('required')">
                Price is required
              </mat-error>
            </mat-form-field>
          </div>

          <div class="flex-space-evenly">
            <mat-form-field>
              <mat-label>Start Time</mat-label>
              <mat-select formControlName="startTime">
                <mat-option *ngFor="let time of startTimes" [value]="time">
                  {{ time }}
                </mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>End Time</mat-label>
              <mat-select formControlName="endTime">
                <mat-option *ngFor="let time of startTimes" [value]="time">
                  {{ time }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <div class="topic-container">
            <div class="input">
              <mat-form-field>
                <mat-label>Topics</mat-label>
                <div>
                  <input matInput type="text" (keyup.enter)="addTag()" formControlName="tag">
                </div>
              </mat-form-field>
              <button mat-flat-button color="primary" class="add-tag-btn" (click)="addTag()">Add</button>
            </div>
            <mat-chip-list>
              <mat-chip *ngFor="let tag of tags; index as index">
                {{ tag }}
                <button class="close-btn" mat-icon-button (click)="deleteTag(index)">
                  <mat-icon>close</mat-icon>
                </button>
              </mat-chip>
            </mat-chip-list>
          </div>

          <mat-form-field>
            <mat-label>Description</mat-label>
            <textarea matInput rows="5" formControlName="description"></textarea>
          </mat-form-field>

          <app-image-cropper [defaultImage]="event.img" (imageData)="imageData($event)"></app-image-cropper>
      </section>

      <section>
          <p class="section-title">Event Location</p>
          <mat-form-field>
            <mat-label>Venue</mat-label>
            <mat-select formControlName="venueId">
              <mat-option *ngFor="let venue of venues" [value]="venue._id" (click)="selectVenue(venue._id)">
                {{ venue.name }}
              </mat-option>
            </mat-select>
          </mat-form-field>

          <ng-container *ngIf="selectedVenue">
            <div class="field">
              <p class="details-title">Venue details</p>
              <div class="flex-container">
                <img src={{selectedVenue.img}} class="venue-image">
                <div class="venue-flex-container">
                  <p>{{ selectedVenue.address }}</p>
                  <p>{{ selectedVenue.zipcode }} {{ selectedVenue.city }}</p>
                  <p>{{ selectedVenue.phoneNumber }}</p>
                  <a
                    class="website-link"
                    [href]="selectedVenue.website"
                    target="_blank">
                    Venue's website
                    <fa-icon [icon]="faLongArrowAltRight"></fa-icon>
                  </a>
                </div>
              </div>
            </div>
          </ng-container>
        </section>

        <section>
          <p class="section-title">Event Teacher</p>
          <mat-form-field>
            <mat-label>Teacher</mat-label>
            <mat-select formControlName="teacherId">
              <mat-option *ngFor="let teacher of teachers" [value]="teacher._id" (click)="selectTeacher(teacher._id)">
                {{ teacher.firstName }} {{ teacher.lastName }}
              </mat-option>
            </mat-select>
          </mat-form-field>

          <ng-container *ngIf="selectedTeacher">
            <div class="field">
              <p class="details-title">Teacher details</p>
              <div class="flex-container">
                <img src={{selectedTeacher.img}} class="teacher-image">
                <div class="teacher-flex-container">
                  <p>{{ selectedTeacher.email }}</p>
                  <p>{{ selectedTeacher.phoneNumber }}</p>
                </div>
              </div>
            </div>
          </ng-container>
        </section>

        <div class="buttons">
          <button mat-flat-button routerLink="/manage-events">Cancel</button>
          <button mat-flat-button color="primary" (click)="submitEventForm()" [disabled]="!eventForm.valid">{{ submitFormBtnText }}</button>
        </div>

    </form>

  `,
  styleUrls: ['./event-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventFormComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() event: IEvent;
  @Input() venues: IVenue[];
  @Input() teachers: ITeacher[];
  @Input() submitFormBtnText: string;

  @Output() submitForm: EventEmitter<IEvent> = new EventEmitter();

  public title = 'Add event';
  public tags: string[] = [];
  public startTimes: string[] = [];
  public selectedVenue: IVenue;
  public selectedTeacher: ITeacher;
  public faLongArrowAltRight = faLongArrowAltRight;

  public eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      title: [this.event.title, Validators.required],
      date: [this.event.date, Validators.required],
      price: [this.event.price, Validators.required],
      startTime: [this.event.startTime],
      endTime: [this.event.endTime],
      tag: [''],
      description: [this.event.description],
      imageData: [this.event.img],
      venueId: [this.event.venueId, Validators.required],
      teacherId: [this.event.teacherId, Validators.required],
    });

    this.tags = [...this.event.tags];
    this.startTimes = times;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (this.eventForm && changes.teachers?.previousValue !== changes.teachers?.currentValue) {
      this.populateTeacherForm();
    }

    if (this.eventForm && changes.venues?.previousValue !== changes.venues?.currentValue && this.eventForm) {
      this.populateVenueForm();
    }
  }

  public ngAfterContentInit(): void {
    if (this.teachers) {
      this.populateTeacherForm();
    }

    if (this.venues) {
      this.populateVenueForm();
    }
  }

  public populateTeacherForm(): void {
    if (!this.eventForm.get('teacherId').value) {
      this.selectTeacher(this.teachers[0]._id);
    } else {
      const teacher = this.teachers.find(t => t._id === this.event.teacherId);
      this.selectTeacher(teacher._id);
    }
  }

  public populateVenueForm(): void {
    if (!this.eventForm.get('venueId').value) {
      this.selectVenue(this.venues[0]._id);
    } else {
      const venue = this.venues.find(v => v._id === this.event.venueId);
      this.selectVenue(venue._id);
    }
  }

  public selectVenue(venueId: string): void {
    this.eventForm.get('venueId').setValue(venueId);
    this.selectedVenue = this.venues.find(venue => venue._id === venueId);
  }

  public selectTeacher(teacherId: string): void {
    this.eventForm.get('teacherId').setValue(teacherId);
    this.selectedTeacher = this.teachers.find(teacher => teacher._id === teacherId);
  }

  public imageData(event: string): void {
    console.log('imageData', event);
    this.eventForm.get('imageData').setValue(event);
  }

  public addTag(): void {
    const newTag = this.eventForm.get('tag').value.trim();
    if (newTag) {
      this.tags.push(newTag);
      this.eventForm.get('tag').setValue('');
    }
  }

  public deleteTag(index: number): void {
    this.tags.splice(index, 1);
  }

  public submitEventForm(): void {
    const form: IEvent = {
      title: this.eventForm.value.title.trim(),
      description: this.eventForm.value.description,
      date: this.eventForm.value.date,
      startTime: this.eventForm.value.startTime,
      endTime: this.eventForm.value.endTime,
      price: this.eventForm.value.price,
      tags: this.tags,
      img: this.eventForm.value.imageData,
      venueId: this.eventForm.value.venueId,
      teacherId: this.eventForm.value.teacherId
    };

    if (this.event._id) {
      form._id = this.event._id;
    }

    console.log('form', form);
    console.log('this.eventForm.value.imageData', this.eventForm.value.imageData);

    this.submitForm.emit(form);
  }
}
