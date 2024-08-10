import { NgForOf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { images } from 'ionicons/icons';

@Component({
  selector: 'app-scrolls-both-ways',
  templateUrl: './scrolls-both-ways.component.html',
  styleUrls: ['./scrolls-both-ways.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class ScrollsBothWaysComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  protected readonly images = signal<string[]>([
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
  ]);
}
