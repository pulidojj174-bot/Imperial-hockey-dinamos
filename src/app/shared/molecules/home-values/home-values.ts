import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface ValueItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-home-values',
  imports: [],
  templateUrl: './home-values.html',
  styleUrl: './home-values.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeValues {
  readonly values: ValueItem[] = [
    {
      icon: '🎨',
      title: 'Diseño 100% personalizado',
      description: 'Cada mesa se diseña desde cero según tus especificaciones, estilo y espacio.',
    },
    {
      icon: '🪵',
      title: 'Materiales premium',
      description: 'Maderas nobles, paños de competición, herrajes importados y acabados de lujo.',
    },
    {
      icon: '🔧',
      title: 'Fabricación artesanal',
      description: 'Cada pieza es construida a mano por artesanos con años de experiencia.',
    },
    {
      icon: '🚚',
      title: 'Entrega a medida',
      description: 'Instalación profesional en tu espacio con garantía de calidad total.',
    },
  ];
}
