import { NgForOf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { AnimatedBorderComponent } from '../animated-border/animated-border.component';
import { BreakoutCircleComponent } from '../breakout-circle/breakout-circle.component';

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
      title: 'Circle Slider',
      component: AnimatedBorderComponent,
      image: 'circle-slider.jpg',
    },
    {
      title: 'Scrolls both Ways',
      component: AnimatedBorderComponent,
      image: 'scrolls-both-ways.jpg',
    },
    {
      title: 'Breakout Circle',
      component: BreakoutCircleComponent,
      image: 'circle-breakout.jpg',
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
