import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { GestureController, IonicModule } from '@ionic/angular';
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
export class CircleSliderComponent implements AfterViewInit {
  @ViewChild('slider') slider: ElementRef;
  angle = signal<number>(0);

  private gestureCtrl: GestureController = inject(GestureController);

  listenForDrag = (event: any) => {
    console.log('drag', event.type);
  };

  constructor() {
    this.slider = new ElementRef(null);
  }

  // ngOnInit() {
  //   this.slider.nativeElement.addEventListener('drag', this.dragHandler.bind(this));
  // }

  ngAfterViewInit() {
    if (this.slider && this.slider.nativeElement) {
      // this.slider.nativeElement.addEventListener('mousedown mouseup', this.listenForDrag.bind(this));
      const gesture = this.gestureCtrl.create({
        el: this.slider.nativeElement,
        gestureName: 'drag',
        onStart: this.listenForDrag,
        onMove: this.listenForDrag,
        onEnd: this.listenForDrag,
      });
      gesture.enable(true);
    }
  }
}

// constructor(
//   private el: ElementRef,
//   private gestureCtrl: GestureController,
//   private zone: NgZone
// ) { }
//
// ngAfterViewInit() {
//   this.loadLongPressOnElement();
// }
//
// loadLongPressOnElement() {
//   const gesture = this.gestureCtrl.create({
//     el: this.el.nativeElement,
//     threshold: 0,
//     gestureName: 'long-press',
//     onStart: ev => {
//       this.longPressActive = true;
//       this.longPressAction();
//
//       this.positions = {
//         start: { x: ev.startX, y: ev.startY },
//         current: { x: ev.currentX, y: ev.currentY }
//       };
//
//     },
//     onMove: ev => {
//       this.positions.current = { x: ev.currentX, y: ev.currentY };
//     },
//     onEnd: ev => {
//       this.longPressActive = false;
//     }
//   });
//   gesture.enable(true);
// }

// dragHandler: (event: any) => void = (event) => {
//   console.log('drag');
//   const rect = this.slider.nativeElement.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;
//   const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * 180 / Math.PI;
//   this.angle.set(angle);
// };
//
//
// }
