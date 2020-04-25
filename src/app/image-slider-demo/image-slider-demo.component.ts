import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider-demo',
  templateUrl: './image-slider-demo.component.html',
  styleUrls: ['./image-slider-demo.component.css']
})

export class ImageSliderDemoComponent implements OnInit {

  imageObject: Array<object> = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
