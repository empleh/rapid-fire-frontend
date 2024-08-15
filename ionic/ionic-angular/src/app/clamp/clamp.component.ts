import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-clamp',
  templateUrl: './clamp.component.html',
  styleUrls: ['./clamp.component.scss'],
  imports: [
    ModalHeaderComponent,
    IonicModule
  ],
  standalone: true
})
export class ClampComponent {

  constructor() { }

}
