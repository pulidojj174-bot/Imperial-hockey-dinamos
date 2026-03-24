import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  imports: [],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutHero {
  readonly title = input('Nosotros');
  readonly description = input(
    'Descubre la historia, misión y valores que impulsan a Imperial Hockey Dinamo a fabricar las mejores mesas dinamo artesanales del mercado.'
  );
}
