import { NgForOf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AnimateOnScrollComponent } from '../animate-on-scroll/animate-on-scroll.component';
import { AnimatedBorderComponent } from '../animated-border/animated-border.component';
import { BreakoutCircleComponent } from '../breakout-circle/breakout-circle.component';
import { CardFlipComponent } from '../card-flip/card-flip.component';
import { CircleSliderComponent } from '../circle-slider/circle-slider.component';
import { FloatingLabelComponent } from '../floating-label/floating-label.component';
import { GlassmorphismComponent } from '../glassmorphism/glassmorphism.component';
import { NavUtilityService } from '../nav-utility.service';
import { ScrollsBothWaysComponent } from '../scrolls-both-ways/scrolls-both-ways.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgForOf],
})
export class HomePage {
  private navUtility: NavUtilityService = inject(NavUtilityService);
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
    // {
    //   title: 'Circle Slider',
    //   component: CircleSliderComponent,
    //   image: 'circle-slider.jpg',
    // },
    {
      title: 'Scrolls both Ways',
      component: ScrollsBothWaysComponent,
      image: 'scrollsbothways.jpg',
    },
    {
      title: 'Glassmorphism',
      component: GlassmorphismComponent,
      image: 'glassmorphism.jpg',
    },
    {
      title: 'Floating Label (Pure CSS)',
      component: FloatingLabelComponent,
      image: 'floating-labels.jpg',
    },
    {
      title: 'Animate on scroll',
      component: AnimateOnScrollComponent,
      image: 'animate-on-scroll.jpg',
    },
    {
      title: 'Card Flip',
      component: CardFlipComponent,
      image: 'flip-cards.jpg',
    }
  ]);

  async openExample(example: any) {
    await this.navUtility.openExample(example);
  }
}
