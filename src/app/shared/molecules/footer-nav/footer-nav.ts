import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FooterLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-footer-nav',
  imports: [RouterLink],
  templateUrl: './footer-nav.html',
  styleUrl: './footer-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterNav {
  readonly title = input.required<string>();
  readonly links = input.required<FooterLink[]>();
}
