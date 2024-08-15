import { Component, inject, Input } from '@angular/core';
import { IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavUtilityService } from '../nav-utility.service';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonButton
  ]
})
export class ModalHeaderComponent {
  private navUtility: NavUtilityService = inject(NavUtilityService);
  @Input() title?: string;

  constructor() {
  }

  async close() {
    await this.navUtility.close();
  }
}
