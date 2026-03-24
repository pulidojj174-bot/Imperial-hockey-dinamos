import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface ProductBlock {
  readonly title: string;
  readonly icon: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly description: string;
  readonly featured: boolean;
}

@Component({
  selector: 'app-home-products',
  imports: [NgOptimizedImage],
  templateUrl: './home-products.html',
  styleUrl: './home-products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProducts {
  readonly products: ProductBlock[] = [
    {
      title: 'Billares',
      icon: '🎱',
      image: 'assets/images/home/product-billares.jpg',
      imageAlt: 'Mesa de billar artesanal de Imperial Hockey Dinamo',
      description: 'Mesas de billar profesionales con maderas nobles y paños de competición.',
      featured: false,
    },
    {
      title: 'Dínamos',
      icon: '⚽',
      image: 'assets/images/home/product-dinamos.jpg',
      imageAlt: 'Mesa dínamo personalizada de Imperial Hockey Dinamo',
      description: 'Dínamos personalizados con diseño exclusivo y acabados premium.',
      featured: true,
    },
    {
      title: 'Juegos de mesa',
      icon: '🎲',
      image: 'assets/images/home/product-juegos.jpg',
      imageAlt: 'Mesa de juegos premium de Imperial Hockey Dinamo',
      description: 'Mesas multiusos para póker, dominó, ajedrez y más.',
      featured: false,
    },
  ];
}
