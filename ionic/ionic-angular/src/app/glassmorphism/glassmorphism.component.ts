import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

@Component({
  selector: 'app-glassmorphism',
  templateUrl: './glassmorphism.component.html',
  styleUrls: ['./glassmorphism.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf,
    ModalHeaderComponent
  ]
})
export class GlassmorphismComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
