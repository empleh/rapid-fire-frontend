import { Component, signal, ViewChild } from '@angular/core';
import { IonicModule, IonRange } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-circle-slider',
  templateUrl: './circle-slider.component.html',
  styleUrls: ['./circle-slider.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ModalHeaderComponent
  ]
})
export class CircleSliderComponent {
  @ViewChild('ranger') ranger?: IonRange;
  angle = signal<number>(0);
  sliderTop = signal<number>(0);
  sliderLeft = signal<number>(50);

  handleSlide($event: any) {
    this.angle.set($event.detail.value);

    const top = this.calculateTopPosition(this.angle());
    const left = this.calculateLeftPosition(this.angle());

    this.sliderTop.set(top);
    this.sliderLeft.set(left);
  }

  calculateLeftPosition(angle: number) {
    const radians = (angle * Math.PI) / 180;
    const percentAngle = angle / 360;
    console.log(percentAngle)

    if (angle <= 90) {
      // From 0 to 90 degrees, we go from 50% to 75%
      return 50 + (percentAngle * 50) * radians; // (25% range to cover)
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

  calculateTopPosition(angle: number) {
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
}
