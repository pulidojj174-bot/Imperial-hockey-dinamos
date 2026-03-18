import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-hero',
  imports: [],
  templateUrl: './contact-hero.html',
  styleUrl: './contact-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactHero {
  readonly title = input('Contáctanos');
  readonly description = input(
    'Estamos aquí para ayudarte. Encuentra toda la información que necesitas para ponerte en contacto con nosotros.'
  );
}
