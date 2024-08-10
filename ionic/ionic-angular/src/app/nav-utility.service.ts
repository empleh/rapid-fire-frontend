import { inject, Injectable } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';

@Injectable({
  providedIn: 'root',
})
export class NavUtilityService {
  private modalCtrl: ModalController = inject(ModalController);

  async openExample(component: ComponentRef, componentProps: any = {}) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps,
      animated: true,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      handle: false,
      backdropDismiss: true,
      canDismiss: async (data?: any, role?: string) => {
        return role !== 'gesture';
      },
    });
    await modal.present();

    return modal;
  }

  async close() {
    await this.modalCtrl.dismiss();
  }
}
