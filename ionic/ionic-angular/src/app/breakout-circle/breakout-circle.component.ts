import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, camera, homeOutline, alertCircleOutline } from 'ionicons/icons';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-breakout-circle',
  templateUrl: './breakout-circle.component.html',
  styleUrls: ['./breakout-circle.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ModalHeaderComponent
  ]
})
export class BreakoutCircleComponent {
  constructor() {
    addIcons({ add, camera, homeOutline, alertCircleOutline });
  }

  openCamera() {
    console.log('Open Camera');
  }
}
