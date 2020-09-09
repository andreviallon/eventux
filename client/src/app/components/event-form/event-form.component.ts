import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { IEvent, ICourseDate } from './../../state/event/event.model';
import { ITeacher } from './../../state/teacher/teacher.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { times } from 'src/app/utils/times';
import { IVenue } from './../../state/venue/venue.model';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-event-form',
  template: `
    <form id="event-form" [formGroup]="eventForm">
      <section>
        <p class="section-title">Event Information</p>
          <mat-form-field>
            <mat-label>Title</mat-label>
            <input matInput type="text" formControlName="title">
            <mat-error *ngIf="eventForm.get('title').invalid && eventForm.get('title').touched">
              Title is required
            </mat-error>
          </mat-form-field>

          <div class="flex-space-evenly">
            <mat-form-field>
              <mat-label>Date</mat-label>
              <input matInput [matDatepicker]="picker" formControlName="date">
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
              <mat-error *ngIf="eventForm.get('date').invalid && eventForm.get('date').touched">
                Date is required
              </mat-error>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Price</mat-label>
              <input matInput type="number" formControlName="price">
              <span matPrefix>$ &nbsp;</span>
              <mat-error *ngIf="eventForm.get('price').invalid && eventForm.get('price').touched">
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
                  <input matInput type="text" (keyup.enter)="addTag($event)" formControlName="tag">
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

          <app-image-cropper [defaultImage]="event.img | file | async" (imageData)="imageData($event)"></app-image-cropper>
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
          <p>venue selected</p>
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
          <button mat-flat-button color="primary" (click)="submitEventForm()">{{ submitFormBtnText }}</button>
        </div>

    </form>

  `,
  styleUrls: ['./event-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventFormComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('courseDate', { static: false }) date: ElementRef;

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

  constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      title: [this.event.title, Validators.required],
      date: [{ date: this.event.courseDate }, Validators.required],
      price: [this.event.price, Validators.required],
      startTime: [this.event.startTime],
      endTime: [this.event.endTime],
      tag: [''],
      description: [this.event.description],
      imageData: [this.event.img],
      venueId: [this.event.venueId, Validators.required],
      teacherId: [this.event.teacherId, Validators.required],
    });

    this.tags = this.event.tags;
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

  public ngAfterViewInit(): void {
    if (this.teachers) {
      this.populateTeacherForm();
    }

    if (this.venues) {
      this.populateVenueForm();
    }

    this.changeDetector.markForCheck();
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
    console.log('this selected venue', this.selectedVenue);
  }

  public selectTeacher(teacherId: string): void {
    this.eventForm.get('teacherId').setValue(teacherId);
    this.selectedTeacher = this.teachers.find(teacher => teacher._id === teacherId);
    this.changeDetector.markForCheck();
  }

  public imageData($event: string): void {
    this.eventForm.get('imageData').setValue($event);
  }

  public addTag(tag?): void {
    const newTag = this.eventForm.get('tag').value.trim();
    if (newTag) {
      this.tags.push(newTag);
      this.eventForm.get('tag').setValue('');
    }
  }

  public deleteTag(index: number): void {
    this.tags.splice(index, 1);
  }

  public submitEventForm() {
    const momentDate = moment(this.eventForm.get('date').value);
    const formattedDate: ICourseDate = {
      day: +momentDate.format('DD'),
      month: +momentDate.format('MM'),
      year: +momentDate.format('YYYY')
    };

    const form: IEvent = {
      title: this.eventForm.value.title.trim(),
      description: this.eventForm.value.description,
      courseDate: formattedDate,
      startTime: this.eventForm.value.startTime,
      endTime: this.eventForm.value.endTime,
      price: this.eventForm.value.price,
      tags: this.tags,
      img: this.eventForm.value.imageData,
      venueId: this.eventForm.value.venueId,
      teacherId: this.eventForm.value.teacherId
    };

    this.submitForm.emit(form);
  }
}
