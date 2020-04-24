import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderDemoComponent } from './image-slider-demo.component';

describe('ImageSliderDemoComponent', () => {
  let component: ImageSliderDemoComponent;
  let fixture: ComponentFixture<ImageSliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
