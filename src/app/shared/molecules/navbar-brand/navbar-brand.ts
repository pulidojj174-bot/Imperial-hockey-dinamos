import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-brand',
  imports: [RouterLink],
  templateUrl: './navbar-brand.html',
  styleUrl: './navbar-brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBrand {
  readonly brandName = input('Imperial Hockey Dinamo');
}
