import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryHero } from '../../molecules/category-hero/category-hero';
import { CategoryCard, CategoryInfo } from '../../molecules/category-card/category-card';
import { CategoryGallery } from '../../molecules/category-gallery/category-gallery';
import { RevealDirective } from '../../../core/directives/reveal.directive';

@Component({
  selector: 'app-category-section',
  imports: [CategoryHero, CategoryCard, CategoryGallery, RevealDirective],
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySection {
  readonly categories: CategoryInfo[] = [
    {
      title: 'Dínamos Personalizados',
      description:
        'Diseños únicos adaptados a cada cliente. Nuestras mesas dínamo son el corazón de cualquier sala de juego, fabricadas con materiales premium y acabados artesanales de la más alta calidad.',
      image: 'assets/images/categories/dinamos/dinamo-1.jpg',
      imageAlt: 'Mesa dínamo personalizada de Imperial Hockey Dinamo',
      featured: true,
      designs: ['Clásico elegante', 'Moderno minimalista', 'Rústico artesanal', 'Premium VIP'],
      customizations: ['Colores a medida', 'Grabados personalizados', 'Dimensiones especiales', 'Materiales premium'],
    },
    {
      title: 'Billares',
      description:
        'Mesas de billar con estilo clásico, moderno o deportivo. Cada mesa es fabricada con maderas nobles y paños de competición para una experiencia de juego profesional.',
      image: 'assets/images/categories/billares/billar-1.jpg',
      imageAlt: 'Mesa de billar artesanal de Imperial Hockey Dinamo',
      featured: false,
      designs: ['Pool americano', 'Snooker inglés', 'Carambola', 'Multijuego'],
      customizations: ['Paño de competición', 'Acabados en madera', 'Patas personalizadas', 'Iluminación integrada'],
    },
    {
      title: 'Juegos de Mesa',
      description:
        'Diversión con diseño premium. Mesas multiusos para póker, dominó, ajedrez y más. Ideales para espacios de entretenimiento de lujo.',
      image: 'assets/images/categories/juegos-mesa/juego-1.jpg',
      imageAlt: 'Juego de mesa premium de Imperial Hockey Dinamo',
      featured: false,
      designs: ['Mesa de póker', 'Mesa multijuego', 'Mesa de dominó', 'Mesa convertible'],
      customizations: ['Portavasos integrados', 'Superficie reversible', 'Cajones de almacenaje', 'Tapizado premium'],
    },
  ];
}
