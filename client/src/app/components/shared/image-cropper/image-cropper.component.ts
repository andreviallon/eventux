import { Component, ViewChild, ElementRef, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import Cropper from "cropperjs";

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements AfterViewInit {

  @ViewChild("image", { static: false }) imageElement: ElementRef;

  @Input("src") imageSource: string;
  @Output() imageData: EventEmitter<string> = new EventEmitter();

  private cropper: Cropper;

  public ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 16 / 9,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageData.emit(canvas.toDataURL("image/png"));
      }
    });
  }
}
