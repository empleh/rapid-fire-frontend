import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
  imports: [
    ModalHeaderComponent,
    IonicModule
  ],
  standalone: true
})
export class DarkModeComponent {
  darkMode = signal<boolean>(false);

  constructor() {
  }

}
