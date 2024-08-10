import { NgForOf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { AnimatedBorderComponent } from '../animated-border/animated-border.component';
import { BreakoutCircleComponent } from '../breakout-circle/breakout-circle.component';
import { ScrollsBothWaysComponent } from '../scrolls-both-ways/scrolls-both-ways.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgForOf],
})
export class HomePage {
  private modalCtrl: ModalController = inject(ModalController);
  public examples = signal([
    {
      title: 'Animated Border',
      component: AnimatedBorderComponent,
      image: 'animated-border.jpg',
    },
    {
      title: 'Breakout Circle',
      component: BreakoutCircleComponent,
      image: 'circle-breakout.jpg',
    },
    {
      title: 'Circle Slider',
      component: AnimatedBorderComponent,
      image: 'circle-slider.jpg',
    },
    {
      title: 'Scrolls both Ways',
      component: ScrollsBothWaysComponent,
      image: 'scrollsbothways.jpg',
    },
    {
      title: 'Glassmorphism',
      component: AnimatedBorderComponent,
      image: 'glassmorphism.jpg',
    }
  ]);

  async openExample(component: ComponentRef, componentProps: any = {}) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps,
      animated: true,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      handle: true,
      backdropDismiss: true,
    });

    await modal.present();

    return modal;
  }
}
