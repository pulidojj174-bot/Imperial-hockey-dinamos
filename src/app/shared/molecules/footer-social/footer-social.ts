import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-footer-social',
  imports: [],
  templateUrl: './footer-social.html',
  styleUrl: './footer-social.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterSocial {
  readonly links = input.required<SocialLink[]>();
}
