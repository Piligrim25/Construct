import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Slider } from 'ngx-slider';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ImageObj } from 'src/app/ImageObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  galleryCarsOptions: NgxGalleryOptions[];
  galleryCarsImages: NgxGalleryImage[];
  galleryWheelsOptions: NgxGalleryOptions[];
  galleryWheelsImages: NgxGalleryImage[];
  galleryStickersOptions: NgxGalleryOptions[];
  galleryStickersImages: NgxGalleryImage[];

  // wheelsList: Array<String> = new Array<String>();
  wheelsList: NgxGalleryImage[] = new Array<NgxGalleryImage>();
  carsList: NgxGalleryImage[] = new Array<NgxGalleryImage>();
  stickersList: NgxGalleryImage[] = new Array<NgxGalleryImage>();

  onInitCars = ["1"];
  onInitWheels = ["1", "2"];
  onInitStickers = [];

  constructor(private http: HttpClient) {

  }

  addCar(): void {
    if (this.onInitCars.length < 4) {
      this.onInitCars.push('New car');
    }
  }

  addWheel(): void {
    if (this.onInitWheels.length < 8) {
      this.onInitWheels.push('New wheel');
    }
  }

  addSticker(): void {
    if (this.onInitStickers.length < 10) {
      this.onInitStickers.push('New sticker');
    }
  }

  // getDataWheels() {
  //   this.http.get("http://localhost:8080/demo/allwheels")
  //     .subscribe(wheels => {
  //       let wheelsArr: ImageObj[] = <Array<ImageObj>>wheels;
  //       wheelsArr.forEach(wheel => this.wheelsList.push(wheel.url));
  //     }
  //   );
  // }

  getDataWheels() {
    this.http.get("http://localhost:8080/demo/allwheels")
      .subscribe(wheels => {
        let wheelsArr: ImageObj[] = <Array<ImageObj>>wheels;
        wheelsArr.forEach(wheel => this.wheelsList.push(
          {
            small: wheel.url,
            medium: wheel.url
          }
        ));
      }
      );
  }

  getDataCars() {
    this.http.get("http://localhost:8080/demo/allcars")
      .subscribe(cars => {
        let carsArr: ImageObj[] = <Array<ImageObj>>cars;
        carsArr.forEach(car => this.carsList.push(
          {
            small: car.url,
            medium: car.url
          }
        ));
      }
      );
  }

  getDataStickers() {
    this.http.get("http://localhost:8080/demo/allstickers")
      .subscribe(stickers => {
        let stickersArr: ImageObj[] = <Array<ImageObj>>stickers;
        stickersArr.forEach(sticker => this.stickersList.push(
          {
            small: sticker.url,
            medium: sticker.url
          }
        ));
      }
      );
  }

  ngOnInit() {
    this.getDataWheels()
    this.getDataCars()
    this.getDataStickers()

    this.galleryCarsOptions = [
      { "thumbnails": false, "preview": false, "imageSize": "contain", "imageArrowsAutoHide": true, "width": "500px", "height": "400px" },
      { "breakpoint": 500 }
    ];
    this.galleryCarsImages = this.carsList;

    this.galleryWheelsOptions = [
      { "thumbnails": false, "preview": false, "imageSize": "contain", "imageArrowsAutoHide": true, "width": '90px', "height": '90px' },
      { "breakpoint": 500 }
    ];
    this.galleryWheelsImages = this.wheelsList;

    this.galleryStickersOptions = [
      { "thumbnails": false, "preview": false, "imageSize": "contain", "imageArrowsAutoHide": true, "width": '90px', "height": '90px' },
      { "breakpoint": 500 }
    ];
    this.galleryStickersImages = this.stickersList;
  }

}