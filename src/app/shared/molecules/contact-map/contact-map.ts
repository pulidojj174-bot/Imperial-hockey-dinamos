import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-map',
  imports: [],
  templateUrl: './contact-map.html',
  styleUrl: './contact-map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMap {
  private readonly sanitizer = inject(DomSanitizer);

  readonly address = input('Pista de Hielo Imperial, Av. Principal 1234, Ciudad Deportiva');
  readonly mapUrl = input(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6301885627586!2d-76.5384258240097!3d3.439808851295048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a688bf66f895%3A0x861a6a2a61c0ff18!2sCl.%205a%20%2319-30%2C%20Bretana%2C%20Cali%2C%20Valle%20del%20Cauca%2C%20Col%C3%B4mbia!5e0!3m2!1spt-BR!2sus!4v1773802606947!5m2!1spt-BR!2sus'
  );

  readonly safeMapUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl())
  );
}

