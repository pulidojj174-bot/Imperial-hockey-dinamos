import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface ContactInfo {
  icon: string;
  title: string;
  lines: string[];
  link?: string;
  linkLabel?: string;
}

@Component({
  selector: 'app-contact-info-card',
  imports: [],
  templateUrl: './contact-info-card.html',
  styleUrl: './contact-info-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoCard {
  readonly info = input.required<ContactInfo>();
}
