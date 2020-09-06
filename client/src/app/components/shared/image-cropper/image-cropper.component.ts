import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CropperOptions } from 'ngx-cropperjs-wrapper';

@Component({
  selector: 'app-image-cropper',
  template: `
    <div class="flex-container">
      <label>Image</label>
      <div class="img-container">
        <lib-cropper [imageFile]="fileInput" [options]="options" (fileChange)="fileChange($event)"></lib-cropper>
        <p *ngIf="!fileInput" class="no-image">No Image Selected</p>
      </div>
      <div>
        <input class="ng-hide" #inputFile multiple type="file" (change)="filePick($event)" accept="image/*"/>
        <button mat-flat-button color="primary" (click)="inputFile.click()">Upload</button>
        <button mat-button (click)="removeFile()">Remove</button>
      </div>
    </div>
  `,
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit, OnChanges {

  @Input() defaultImage;
  @Output() imageData: EventEmitter<File> = new EventEmitter();

  public fileInput: File = null;
  public options = {
    scalable: false,
    zoomable: false,
    aspectRatio: 16 / 9,
  } as CropperOptions;

  public ngOnInit(): void {
    if (this.defaultImage) {
      this.fileInput = this.defaultImage;
      console.log('this.defaultImage', this.defaultImage);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.defaultImage.currentValue !== changes.defaultImage.previousValue) {
      this.fileInput = this.defaultImage;
    }
  }

  public filePick(event: any): void {
    this.fileInput = event.target.files.item(0);
  }

  public fileChange(file: File): void {
    this.imageData.emit(file);
  }

  public removeFile(): void {
    this.fileInput = null;
    this.imageData.emit(null);
  }
}
