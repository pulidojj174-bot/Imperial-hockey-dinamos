import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactSection } from '../../organisms/contact-section/contact-section';

@Component({
  selector: 'app-contact-template',
  imports: [ContactSection],
  templateUrl: './contact-template.html',
  styleUrl: './contact-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactTemplate {}
