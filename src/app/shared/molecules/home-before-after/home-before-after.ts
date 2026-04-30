import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

export interface BeforeAfterProject {
  readonly name: string;
  readonly type: string;
  readonly description: string;
  readonly beforeImage: string;
  readonly beforeAlt: string;
  readonly afterImage: string;
  readonly afterAlt: string;
}

@Component({
  selector: 'app-home-before-after',
  imports: [ImageCompareModule],
  templateUrl: './home-before-after.html',
  styleUrl: './home-before-after.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBeforeAfter {
  readonly projects: BeforeAfterProject[] = [
    {
      name: 'Dínamo Ejecutivo Premium',
      type: 'Dínamo',
      description:
        'De un espacio vacío a una pieza central de lujo con acabados en ébano y detalles dorados.',
      beforeImage: 'assets/images/projects/carpeta_1/imagen_1-6.jpeg',
      beforeAlt: 'Espacio antes de instalar el dínamo ejecutivo premium',
      afterImage: 'assets/images/projects/carpeta_1/imagen_1-5.jpeg',
      afterAlt: 'Dínamo ejecutivo premium instalado con acabado ébano y detalles dorados',
    },
    {
      name: 'Billar Clásico Imperial',
      type: 'Billar',
      description:
        'Transformación completa: de un salón común a un espacio elegante con billar profesional.',
      beforeImage: 'assets/images/projects/carpeta_1/imagen_1-6.jpeg',
      beforeAlt: 'Salón antes de la instalación del billar clásico Imperial',
      afterImage: 'assets/images/projects/carpeta_2/imagen_2-4.jpeg',
      afterAlt: 'Billar clásico Imperial instalado con acabados en caoba',
    },
    {
      name: 'Mesa Póker VIP Octagonal',
      type: 'Juego de Mesa',
      description:
        'Un rincón sin uso convertido en la sala VIP perfecta para noches de póker exclusivas.',
      beforeImage: 'assets/images/projects/carpeta_3/imagen_3-17.jpeg',
      beforeAlt: 'Espacio antes de instalar la mesa de póker VIP',
      afterImage: 'assets/images/projects/carpeta_3/imagen_3-10.jpeg',
      afterAlt: 'Mesa de póker VIP octagonal instalada para 8 jugadores',
    },
  ];
}
