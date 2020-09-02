import { IEvent } from './../../state/event/event.model';
import { ITeacher } from './../../state/teacher/teacher.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { times } from 'src/app/utils/times';
import { IVenue } from './../../state/venue/venue.model';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss', '../shared/date-picker/date-picker.component.scss'],
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

  public myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
  };

  public dateModel: IMyDateModel = {
    isRange: false
  };

  constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef) {

  }

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
    if (changes.teachers?.previousValue !== changes.teachers?.currentValue) {
      this.populateTeacherForm();
    }

    if (changes.venues?.previousValue !== changes.venues?.currentValue && this.eventForm) {
      this.populateVenueForm();
    }
  }

  public ngAfterViewInit() {
    if (this.event.courseDate) {
      this.date.nativeElement.value = this.populateDateField();
    }
    this.populateTeacherForm();
    this.populateVenueForm();

    this.changeDetector.detectChanges();
    this.changeDetector.markForCheck();
  }

  public populateTeacherForm() {
    if (!this.eventForm) {
      return;
    }
    if (!this.eventForm.get('teacherId').value) {
      this.selectTeacher(this.teachers[0]._id);
    } else {
      const teacher = this.teachers.find(t => t._id === this.event.teacherId);
      this.selectTeacher(teacher._id);
    }
  }

  public populateVenueForm() {
    if (!this.eventForm.get('venueId').value) {
      this.selectVenue(this.venues[0]._id);
    } else {
      const venue = this.venues.find(v => v._id === this.event.venueId);
      this.selectVenue(venue._id);
    }
  }

  public populateDateField(): string {
    const event = this.eventForm.get('date').value;
    const day: string = event.date.day <= 9 ? `0${event.date.day}` : `${event.date.day}`;
    const month: string = event.date.month <= 9 ? `0${event.date.month}` : `${event.date.month}`;

    return `${day}.${month}.${event.date.year}`;
  }

  public imageData($event: string): void {
    this.eventForm.get('imageData').setValue($event);
  }

  public addTag(tag): void {
    this.tags.push(tag.target.value);
    this.eventForm.get('tag').setValue('');
  }

  public deleteTag(index: number): void {
    this.tags.splice(index, 1);
  }

  public selectVenue(venueId: string): void {
    this.eventForm.get('venueId').setValue(venueId);
    this.selectedVenue = this.venues.find(venue => venue._id === venueId);
  }

  public selectTeacher(teacherId: string): void {
    this.eventForm.get('teacherId').setValue(teacherId);
    this.selectedTeacher = this.teachers.find(teacher => teacher._id === teacherId);
    this.changeDetector.markForCheck();
  }

  public onDateChanged($event) {
    this.eventForm.get('date').setValue($event.singleDate.courseDate);
  }

  public submitEventForm() {
    const form: IEvent = {
      title: this.eventForm.value.title.trim(),
      description: this.eventForm.value.description,
      courseDate: this.eventForm.value.courseDate,
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
