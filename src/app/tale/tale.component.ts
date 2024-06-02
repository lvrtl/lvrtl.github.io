import { Component, Input } from '@angular/core';
import { Tale } from 'src/interfaces';

@Component({
  selector: 'app-tale',
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.scss',
})
export class TaleComponent {
  @Input({ required: true }) tale: Tale = {
    title: 'bad',
    filename: 'none',
    date: new Date(),
  };
}
