import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-brand',
  imports: [],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBrand {
  readonly brandName = input('Imperial Hockey Dinamo');
  readonly description = input('Fabricantes artesanales de mesas de juego de azar: dínamos, billares y juegos de mesa premium.');
}
