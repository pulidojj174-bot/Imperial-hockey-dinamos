import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroCarousel } from '../../molecules/hero-carousel/hero-carousel';
import { HomeSpecialty } from '../../molecules/home-specialty/home-specialty';
import { HomeProducts } from '../../molecules/home-products/home-products';
import { HomeFeaturedProjects } from '../../molecules/home-featured-projects/home-featured-projects';
import { HomeBeforeAfter } from '../../molecules/home-before-after/home-before-after';
import { HomeValues } from '../../molecules/home-values/home-values';
import { HomeCta } from '../../molecules/home-cta/home-cta';
import { RevealDirective } from '../../../core/directives/reveal.directive';

@Component({
  selector: 'app-home-section',
  imports: [
    HeroCarousel,
    HomeSpecialty,
    HomeProducts,
    HomeFeaturedProjects,
    HomeBeforeAfter,
    HomeValues,
    HomeCta,
    RevealDirective,
  ],
  templateUrl: './home-section.html',
  styleUrl: './home-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSection {}
