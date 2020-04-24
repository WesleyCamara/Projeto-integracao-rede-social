import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider-demo',
  templateUrl: './image-slider-demo.component.html',
  styleUrls: ['./image-slider-demo.component.css']
})

export class ImageSliderDemoComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'https://i.picsum.photos/id/580/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://i.picsum.photos/id/838/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/93/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/93/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/543/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/543/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/613/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/613/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/609/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/717/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/717/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
