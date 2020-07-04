import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CropperOptions } from 'ngx-cropperjs-wrapper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {

  @Output() imageData: EventEmitter<File> = new EventEmitter();

  public fileInput: File = null;
  public options = {
    scalable: false,
    zoomable: false,
    aspectRatio: 16 / 9,
  } as CropperOptions;

  public ngOnInit(): void {
  }

  public filePick(event: any) {
    this.fileInput = event.target.files.item(0);
  }

  public fileChange(file: File) {
    this.imageData.emit(file);
  }

  public removeFile() {
    this.fileInput = null;
    this.imageData.emit(null);
  }
}
