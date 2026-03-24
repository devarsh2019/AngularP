import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
})
export class Tab {
   @Input() title?: string | null;
  active = false;
}
