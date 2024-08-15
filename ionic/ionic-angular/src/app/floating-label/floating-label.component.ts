import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-floating-label',
  templateUrl: './floating-label.component.html',
  styleUrls: ['./floating-label.component.scss'],
  imports: [
    ModalHeaderComponent,
    IonicModule
  ],
  standalone: true
})
export class FloatingLabelComponent {


}
