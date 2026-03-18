import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../../shared/organisms/footer/footer';
import { Navbar } from '../../../shared/organisms/navbar/navbar';

@Component({
  selector: 'app-layout-home',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './layout-home.html',
  styleUrl: './layout-home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHome {}
