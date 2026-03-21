import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactHero } from '../../molecules/contact-hero/contact-hero';
import { ContactInfoCard, ContactInfo } from '../../molecules/contact-info-card/contact-info-card';
import { ContactMap } from '../../molecules/contact-map/contact-map';
import { RevealDirective } from '../../../core/directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  imports: [ContactHero, ContactInfoCard, ContactMap, RevealDirective],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  readonly contactCards: ContactInfo[] = [
    {
      icon: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z',
      title: 'Teléfono',
      lines: ['+34 912 345 678', '+34 600 123 456'],
      link: 'tel:+34912345678',
      linkLabel: 'Llamar ahora',
    },
    {
      icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
      title: 'Correo electrónico',
      lines: ['info@imperialhockey.com', 'reservas@imperialhockey.com'],
      link: 'mailto:info@imperialhockey.com',
      linkLabel: 'Enviar correo',
    },
    {
      icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z',
      title: 'Ubicación',
      lines: ['Pista de Hielo Imperial', 'Av. Principal 1234', 'Ciudad Deportiva, CP 28001'],
    },
    {
      icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
      title: 'Horario',
      lines: ['Lunes a Viernes: 9:00 - 21:00', 'Sábados: 10:00 - 18:00', 'Domingos: Cerrado'],
    },
  ];
}
