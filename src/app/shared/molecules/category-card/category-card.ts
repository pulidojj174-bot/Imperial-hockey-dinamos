import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface CategoryInfo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  designs: string[];
  customizations: string[];
}

@Component({
  selector: 'app-category-card',
  imports: [NgOptimizedImage],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCard {
  readonly category = input.required<CategoryInfo>();
}
