import { Component } from '@angular/core';
import { Tale } from 'src/interfaces';

@Component({
  selector: 'app-tales',
  templateUrl: './tales.component.html',
  styleUrls: ['./tales.component.scss'],
})
export class TalesComponent {
  tales: Tale[] = [
    {
      title: 'The Forest',
      filename: 'forest',
      date: new Date(2024, 4),
    },
  ];
}
