import { NgIf } from '@angular/common';
import { Component, OnInit, inject, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavUtilityService } from '../nav-utility.service';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf,
  ]
})
export class ModalHeaderComponent implements OnInit {
  private navUtility: NavUtilityService = inject(NavUtilityService);
  @Input() title?: string;

  constructor() {
  }

  ngOnInit() {
  }

  async close() {
    await this.navUtility.close();
  }
}
