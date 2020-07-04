import { Subscription } from 'rxjs';
import { IVenue } from './../../state/venue/venue.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { times } from 'src/app/utils/times';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() venues: IVenue[];

  public title: string = 'Add event';
  public tags: string[] = [];
  public startTimes: string[] = [];

  public eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  public ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      price: [100, Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      tag: [''],
      description: ['', Validators.required],
      imageData: [File],
      venue: ['', Validators.required]
    });

    this.startTimes = times;
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

}
