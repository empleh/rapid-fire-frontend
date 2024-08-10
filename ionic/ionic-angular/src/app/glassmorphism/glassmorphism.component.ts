import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-glassmorphism',
  templateUrl: './glassmorphism.component.html',
  styleUrls: ['./glassmorphism.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class GlassmorphismComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
