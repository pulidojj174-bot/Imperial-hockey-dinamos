import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxAuroraComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Imperial-hockey-dinamos');
}
