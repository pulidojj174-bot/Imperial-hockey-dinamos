import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-values',
  imports: [],
  templateUrl: './about-values.html',
  styleUrl: './about-values.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValues {
  readonly values: Value[] = [
    {
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      title: 'Calidad',
      description:
        'Materiales premium y procesos artesanales que garantizan mesas de juego con durabilidad y acabados superiores.',
    },
    {
      icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
      title: 'Innovación',
      description:
        'Integramos las últimas tecnologías con técnicas tradicionales para crear mesas dinamo de vanguardia.',
    },
    {
      icon: 'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z',
      title: 'Personalización',
      description:
        'Cada proyecto es único. Diseñamos mesas dinamo a medida para adaptarnos a las necesidades de tu sala de juego.',
    },
    {
      icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
      title: 'Compromiso',
      description:
        'Nos involucramos en cada detalle, desde el diseño hasta la entrega, para superar tus expectativas.',
    },
  ];
}
