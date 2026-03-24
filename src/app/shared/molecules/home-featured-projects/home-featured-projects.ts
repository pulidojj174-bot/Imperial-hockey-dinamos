import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface FeaturedProject {
  readonly name: string;
  readonly type: string;
  readonly image: string;
  readonly imageAlt: string;
}

@Component({
  selector: 'app-home-featured-projects',
  imports: [NgOptimizedImage],
  templateUrl: './home-featured-projects.html',
  styleUrl: './home-featured-projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFeaturedProjects {
  readonly projects: FeaturedProject[] = [
    {
      name: 'Dínamo Ejecutivo Premium',
      type: 'Dínamo',
      image: 'assets/images/projects/proyecto-dinamo-1.jpg',
      imageAlt: 'Mesa dínamo ejecutivo premium con acabado ébano y detalles dorados',
    },
    {
      name: 'Billar Clásico Imperial',
      type: 'Billar',
      image: 'assets/images/projects/proyecto-billar-1.jpg',
      imageAlt: 'Mesa de billar clásico Imperial con acabados en caoba',
    },
    {
      name: 'Mesa Póker VIP Octagonal',
      type: 'Juego de Mesa',
      image: 'assets/images/projects/proyecto-juego-1.jpg',
      imageAlt: 'Mesa de póker VIP octagonal para 8 jugadores',
    },
  ];
}
