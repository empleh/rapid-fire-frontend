import { Component, HostListener, OnInit } from '@angular/core';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { InViewDirective } from './in-view.directive';

@Component({
  selector: 'app-animate-on-scroll',
  templateUrl: './animate-on-scroll.component.html',
  styleUrls: ['./animate-on-scroll.component.scss'],
  imports: [
    ModalHeaderComponent,
    InViewDirective
  ],
  standalone: true
})
export class AnimateOnScrollComponent {
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
console.log('Scrolling');
  }

  constructor() { }

  onScroll($event: Event) {
    console.log('Scrolling', $event.target);
  }
}
