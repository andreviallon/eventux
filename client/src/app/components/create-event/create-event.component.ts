import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { times } from 'src/app/utils/times';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

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
    });

    this.startTimes = times;

    console.log('startTimes', this.startTimes);
  }

  public addTag(tag): void {
    this.tags.push(tag.target.value);
    this.eventForm.get('tag').setValue('');
  }

  public deleteTag(index: number): void {
    this.tags.splice(index, 1);
  }

}
