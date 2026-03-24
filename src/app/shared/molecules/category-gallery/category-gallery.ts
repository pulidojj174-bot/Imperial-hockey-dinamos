import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

interface GalleryCategory {
  id: string;
  title: string;
  icon: string;
  images: { src: string; alt: string }[];
}

@Component({
  selector: 'app-category-gallery',
  imports: [NgOptimizedImage, AccordionModule],
  templateUrl: './category-gallery.html',
  styleUrl: './category-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryGallery {
  readonly categories: GalleryCategory[] = [
    {
      id: 'dinamos',
      title: '⚽ Dínamos Personalizados',
      icon: '⚽',
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `assets/images/categories/dinamos/dinamo-${i + 1}.jpg`,
        alt: `Mesa dínamo personalizada modelo ${i + 1}`,
      })),
    },
    {
      id: 'billares',
      title: '🎱 Billares',
      icon: '🎱',
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `assets/images/categories/billares/billar-${i + 1}.jpg`,
        alt: `Mesa de billar modelo ${i + 1}`,
      })),
    },
    {
      id: 'juegos-mesa',
      title: '🎲 Juegos de Mesa',
      icon: '🎲',
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `assets/images/categories/juegos-mesa/juego-${i + 1}.jpg`,
        alt: `Juego de mesa premium modelo ${i + 1}`,
      })),
    },
  ];
}
