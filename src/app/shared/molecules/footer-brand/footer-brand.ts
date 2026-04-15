import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer-brand',
  imports: [NgOptimizedImage],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBrand {
  readonly brandName = input('Imperial Hockey Dinamo');
  readonly description = input('Fabricantes artesanales de mesas de juego de azar: dínamos, billares y juegos de mesa premium.');
}
