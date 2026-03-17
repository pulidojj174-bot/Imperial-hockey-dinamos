import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-brand',
  imports: [],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBrand {
  readonly brandName = input('Imperial Hockey Dinamos');
  readonly description = input('Club de hockey sobre hielo dedicado a la formación, competición y pasión por el deporte.');
}
