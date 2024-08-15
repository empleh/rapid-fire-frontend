import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircleSliderComponent } from './circle-slider.component';

describe('CircleSliderComponent', () => {
  // let component: CircleSliderComponent;
  // let fixture: ComponentFixture<CircleSliderComponent>;
  //
  // beforeEach(waitForAsync(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CircleSliderComponent ],
  //     imports: [IonicModule.forRoot()]
  //   }).compileComponents();
  //
  //   fixture = TestBed.createComponent(CircleSliderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  function calculateLeftPosition(angle: number) {

    const radians = (angle * Math.PI) / 180;
    const percentAngle = angle / 360;
    console.log(percentAngle)

    if (angle <= 90) {
      // From 0 to 90 degrees, we go from 50% to 75%
      return 50 + (percentAngle * 75) * radians; // (25% range to cover)
    } else if (angle <= 180) {
      // From 90 to 180 degrees, we go from 75% to 0%
      return 75 + ((angle - 90) / 90) * (-75); // (75% down to 0%)
    } else if (angle <= 270) {
      // From 180 to 270 degrees, we go from 0% to -75%
      return 0 + ((angle - 180) / 90) * (-75); // (0% to -75%)
    } else { // From 270 to 360 degrees, we go from -75% to -50%
      return -75 + ((angle - 270) / 90) * 25; // (-75% to -50%)
    }
  }

  it('should return 50% for angle 0', () => {
    expect(calculateLeftPosition(0)).toBe(50);
  });

  it('should return 75% for angle 90', () => {
    expect(calculateLeftPosition(90)).toBe(75);
  });

  it('should return 0% for angle 180', () => {
    expect(calculateLeftPosition(180)).toBe(0);
  });

  it('should return -75% for angle 270', () => {
    expect(calculateLeftPosition(270)).toBe(-75);
  });

  it('should return -50% for angle 360', () => {
    expect(calculateLeftPosition(360)).toBe(-50);
  });


 function calculateTopPosition(angle: number)
  {
    if (angle <= 90) {
      // From 0 to 90 degrees, we go from 0% to 50%
      return (angle / 90) * 50; // Interpolating from 0% to 50%
    } else if (angle <= 180) {
      // From 90 to 180 degrees, we go from 50% to 100%
      return 50 + ((angle - 90) / 90) * 50; // Interpolating from 50% to 100%
    } else if (angle <= 270) {
      // From 180 to 270 degrees, we go from 100% back to 50%
      return 100 + ((angle - 180) / 90) * (-50); // Interpolating from 100% down to 50%
    } else {
      // From 270 to 360 degrees, we go from 50% back to 0%
      return 50 + ((angle - 270) / 90) * (-50); // Interpolating from 50% down to 0%
    }
  }


  it('should return 0% for angle 0', () => {
    expect(calculateTopPosition(0)).toBe(0);
  });

  it('should return 50% for angle 90', () => {
    expect(calculateTopPosition(90)).toBe(50);
  });

  it('should return 100% for angle 180', () => {
    expect(calculateTopPosition(180)).toBe(100);
  });

  it('should return 50% for angle 270', () => {
    expect(calculateTopPosition(270)).toBe(50);
  });

  it('should return 0% for angle 360', () => {
    expect(calculateTopPosition(360)).toBe(0);
  });
});
