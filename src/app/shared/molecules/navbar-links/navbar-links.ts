import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar-links',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-links.html',
  styleUrl: './navbar-links.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinks {
  readonly links = input.required<NavLink[]>();
  readonly linkClicked = output<void>();
}
