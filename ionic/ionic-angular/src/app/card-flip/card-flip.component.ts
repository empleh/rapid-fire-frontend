import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { AnimationController, IonCard, IonicModule } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.scss'],
  imports: [
    ModalHeaderComponent,
    IonicModule
  ],
  standalone: true
})
export class CardFlipComponent implements AfterViewInit {
  flipped = signal(false);
  flipToAnimation?: Animation;
  flipBackAnimation?: Animation;
  isFlipped: boolean = false; // Track the flip state

  animation?: Animation;
  @ViewChild(IonCard, {read: ElementRef}) card?: ElementRef<HTMLIonCardElement>;

  constructor(private animationCtrl: AnimationController) {

  }

  ngAfterViewInit() {
    // Setup the flip to 180 degrees animation
    this.flipToAnimation = this.animationCtrl.create()
      .addElement(this.card?.nativeElement as HTMLElement)
      .duration(600)
      .fromTo('transform', 'rotateY(0deg)', 'rotateY(180deg)');

    // Setup the flip back to 0 degrees animation
    this.flipBackAnimation = this.animationCtrl.create()
      .addElement(this.card?.nativeElement as HTMLElement)
      .duration(600)
      .fromTo('transform', 'rotateY(180deg)', 'rotateY(0deg)');
  }

  flipIonCard() {
    // Play the appropriate animation based on the current flip state
    if (this.isFlipped) {
      this.flipBackAnimation?.play();
    } else {
      this.flipToAnimation?.play();
    }

    // Toggle the flip state
    this.isFlipped = !this.isFlipped;
  }
}
