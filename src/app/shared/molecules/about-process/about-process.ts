import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-process',
  imports: [],
  templateUrl: './about-process.html',
  styleUrl: './about-process.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutProcess {
  readonly steps: ProcessStep[] = [
    {
      number: 1,
      icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
      title: 'Idea',
      description:
        'Todo comienza contigo. Escuchamos tus necesidades y definimos juntos la mesa dinamo ideal.',
    },
    {
      number: 2,
      icon: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
      title: 'Diseño',
      description:
        'Nuestro equipo crea bocetos y prototipos digitales para visualizar el producto final.',
    },
    {
      number: 3,
      icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      title: 'Fabricación',
      description:
        'Artesanos expertos dan vida al diseño con materiales seleccionados y técnicas de precisión.',
    },
    {
      number: 4,
      icon: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
      title: 'Entrega',
      description:
        'Revisión de calidad exhaustiva y entrega personalizada para que disfrutes de tu mesa dinamo.',
    },
  ];
}
