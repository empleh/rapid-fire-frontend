import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
  imports: [
    ModalHeaderComponent,
    IonicModule
  ],
  standalone: true
})
export class InfiniteScrollComponent {
  items = signal<number[]>(Array.from({ length: 50 }, (_, i) => i + 1));

  constructor() { }

  loadData($event: any) {
    this.items.update((items) => [...items, ...Array.from({ length: 50 }, (_, i) => i + 1 + items.length)]);
    $event.target.complete();
  }
}
