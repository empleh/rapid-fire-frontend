import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  imports: [IonicModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
  }
}
