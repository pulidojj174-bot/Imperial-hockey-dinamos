import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategorySection } from '../../organisms/category-section/category-section';

@Component({
  selector: 'app-category-template',
  imports: [CategorySection],
  templateUrl: './category-template.html',
  styleUrl: './category-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTemplate {}
