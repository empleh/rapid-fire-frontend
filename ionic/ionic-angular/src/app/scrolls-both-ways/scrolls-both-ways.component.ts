import { Component, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-scrolls-both-ways',
  templateUrl: './scrolls-both-ways.component.html',
  styleUrls: ['./scrolls-both-ways.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ModalHeaderComponent
  ]
})
export class ScrollsBothWaysComponent {
  protected readonly images = signal<string[]>([
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
  ]);
}
