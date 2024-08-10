import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-animated-border',
  templateUrl: './animated-border.component.html',
  styleUrls: ['./animated-border.component.scss'],
  standalone: true,
  imports: [IonicModule, ModalHeaderComponent]
})
export class AnimatedBorderComponent {
}
