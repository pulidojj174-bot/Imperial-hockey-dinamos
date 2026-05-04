import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-about-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './about-gallery.html',
  styleUrl: './about-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutGallery {
  readonly items: GalleryItem[] = [
    {
      src: 'assets/images/about/gallery-2.jpg',
      alt: 'Taller de fabricación de mesas dinamo de Imperial Hockey Dinamo',
      width: 600,
      height: 400,
    },
    {
      src: 'assets/images/about/placeholder-gallery-2.svg',
      alt: 'Materiales premium seleccionados para la fabricación de mesas dinamo',
      width: 600,
      height: 400,
    },
    {
      src: 'assets/images/about/placeholder-gallery-3.svg',
      alt: 'Proceso de fabricación de una mesa dinamo artesanal',
      width: 600,
      height: 400,
    },
    {
      src: 'assets/images/about/gallery-3.jpg',
      alt: 'Mesa dinamo terminada lista para sala de juego',
      width: 600,
      height: 400,
    },
  ];
}
