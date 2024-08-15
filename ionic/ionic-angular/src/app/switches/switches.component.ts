import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
  imports: [
    IonicModule,
    ModalHeaderComponent
  ],
  standalone: true
})
export class SwitchesComponent {

  constructor() { }

}
