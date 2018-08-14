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

  wheelsList: NgxGalleryImage[] = new Array<NgxGalleryImage>();
  carsList: NgxGalleryImage[] = new Array<NgxGalleryImage>();
  stickersList: NgxGalleryImage[] = new Array<NgxGalleryImage>();

  onInitCars = ["1"];
  onInitWheels = ["1", "2"];
  onInitStickers = [];

  constructor(private http: HttpClient) {

  }

  addObject(amountOfElements, list, name): void {
    if (list.length < amountOfElements) {
      list.push(name);
    }
  }

  addCar(): void {
    this.addObject(4, this.onInitCars, 'New car');
  }

  addWheel(): void {
    this.addObject(8, this.onInitWheels, 'New wheel');
  }

  addSticker(): void {
    this.addObject(10, this.onInitStickers, 'New sticker');
  }

  getData(dataUrl, list) {
    this.http.get(dataUrl)
      .subscribe(temps => {
        let tempsArr: ImageObj[] = <Array<ImageObj>>temps;
        tempsArr.forEach(temp => list.push(
          {
            small: temp.url,
            medium: temp.url
          }
        ));
      }
      );
  }

  getDataWheels() {
    this.getData("http://localhost:8080/demo/allwheels", this.wheelsList);
  }

  getDataCars() {
    this.getData("http://localhost:8080/demo/allcars", this.carsList);
  }

  getDataStickers() {
    this.getData("http://localhost:8080/demo/allstickers", this.stickersList);
  }

  ngOnInit() {
    this.getDataWheels();
    this.getDataCars();
    this.getDataStickers();

    this.galleryCarsOptions = [
      { "thumbnails": false, "preview": false, "imageSize": "contain", "imageArrowsAutoHide": true, "width": "500px", "height": "400px" },
      { "breakpoint": 500 }
    ];
    this.galleryCarsImages = this.carsList;

    this.galleryWheelsOptions = [
      { "thumbnails": false, "preview": false, "imageSize": "contain", "imageArrowsAutoHide": true, "width": '78px', "height": '78px' },
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