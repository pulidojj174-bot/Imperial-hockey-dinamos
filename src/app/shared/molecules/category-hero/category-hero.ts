import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-category-hero',
  imports: [],
  templateUrl: './category-hero.html',
  styleUrl: './category-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryHero {}
