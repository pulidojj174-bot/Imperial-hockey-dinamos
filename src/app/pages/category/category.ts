import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryTemplate } from "../../shared/templates/category-template/category-template";

@Component({
  selector: 'app-category',
  imports: [CategoryTemplate],
  templateUrl: './category.html',
  styleUrl: './category.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Category {}
