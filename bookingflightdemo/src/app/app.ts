import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bookingflight } from "./bookingflight/bookingflight";

@Component({
  selector: 'app-root',
  imports: [Bookingflight],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bookingflightdemo');
}
